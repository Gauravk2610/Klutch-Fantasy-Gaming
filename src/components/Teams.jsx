import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect } from "react";

const Teams = () => {
  // axios cancel token
  const CancelToken = axios.CancelToken;
  const [teamList, setTeamList] = React.useState({});
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const [creditScore, setCreditScore] = React.useState(15);

  const getData = async () => {
    const response = await axios.get(
      "https://api.klutchh.in/v1/rosters/128622/129859?game_type=false",
      {
        cancelToken: CancelToken.source().token,
      }
    );
    console.log(response.data.data?.roster1);
    setTeamList(response.data.data);
  };

  const onSelectPlayer = (player) => {
    // select player if not selected and deselect if selected
    // check if the players credtit score in withinn the limit of the avaiablke credir score
    // if yes then add the player to the selected players list
    // if no then show an error message
    // update the credit score
    // if the player is already selected then remove the player from the selected players list
    // the selected players list should not contain more than 5 players

    // if the player is already selected then remove the player from the selected players list
    if (selectedPlayers.includes(player)) {
        setSelectedPlayers((prev) => {
            return prev.filter((item) => item !== player);
        });
        setCreditScore((prev) => prev + player.credit);
    } else {
        // check if the players credtit score in withinn the limit of the avaiablke credir score
        // if yes then add the player to the selected players list
        // if no then show an error message
        // update the credit score
        if (selectedPlayers.length < 5) {
            if (creditScore - player.credit >= 0) {
                setSelectedPlayers((prev) => [...prev, player]);
                setCreditScore((prev) => prev - player.credit);
            } else {
                alert("You don't have enough credits");
            }
        } else {
            alert("You can select only 5 players");
        }

    }
    };

  useEffect(() => {
    getData();
    setCreditScore(15);
    return () => {
      // cleanup
      CancelToken.source().cancel();
    };
  }, []);

  return (
    <div className="lg:max-w-3xl w-full h-fit border rounded-lg ">
      <div className="text-lg font-semibold px-4 py-3 border-b title">
        Create Team
      </div>
      <div className="bg-[#21093d] rounded-b-lg">
        {/* Five PLayers Selected */}
        <div className="flex flex-col items-center py-8 space-y-3">
            <div className="flex space-x-4">
            {[...Array(5)].map((item, index) => {
                return (
                <div
                    key={index}
                    className="flex rounded-sm text-center justify-center items-center w-12 h-12 bg-[#FF326A] text-xl font-bold"
                >
                    <div>?</div>
                </div>
                );
            })}
            </div>
            <div>Choose five players to join your team</div>
            <button className="py-2 px-4 uppercase font-semibold credit rounded-full">
            Credits left : {creditScore}/15
            </button>
        </div>
        {/* teams vs teams */}
        <div className="flex justify-between">
            <div className="flex items-center">
            <div className=" w-36 h-12 bg-[#FFEE00]" />
            <div className="w-20 h-20 -ml-4 rounded-full bg-[#21093d] border">
                <img
                className="w-full h-full object-contain"
                src="/assets/Team1.png"
                alt=""
                />
            </div>
            <div className="ml-2 text-lg font-semibold">Team Liquid</div>
            </div>
            <img className="w-12 object-contain" src="/assets/VS.png" alt="" />
            <div className="flex items-center">
            <div className="mr-2 text-lg font-semibold">Sentinels</div>
            <div className="w-20 h-20 -mr-4 z-10 flex items-center justify-center rounded-full bg-[#21093d] border">
                <img
                className="w-18 h-18 object-contain"
                src="/assets/Team2.png"
                alt=""
                />
            </div>
            <div className=" w-36 h-12 bg-[#CE0037]" />
            </div>
        </div>
        {/* TeamList */}
        <div className="flex flex-row gap-4 justify-evenly py-6 px-4">
            {/* Team1 */}
            <div className="space-y-4 max-w-xs w-full ">
            {teamList?.roster1?.map((item, index) => (
                <div
                key={index}
                onClick={() => onSelectPlayer(item)}
                className={`flex ${selectedPlayers.includes(item) ? 'border-white border-2' : 'border-slate-500  hover:border hover:border-white '} rounded-md w-full border-collapse cursor-pointer bg-white/20 border `}
                >
                    <div className="w-[110px] h-[87px] ">
                        <img
                            className="w-full h-full border border-white rounded-md object-cover"
                            src={
                            item?.image_url
                                ? item?.image_url
                                : "https://th.bing.com/th/id/OIP.Qdgnl8QbAFqxyzIj6OqrDwHaFL?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            }
                            alt=""
                        />
                    </div>
                <div className="w-full flex flex-col justify-between">
                    <div className="px-4 py-1">
                        {/* Name */}
                        <div className="text-lg font-semibold">{item?.name}</div>
                        {/* Kd */}
                        <div className="text-sm">KD {item?.first_kill_percentage}</div>
                    </div>
                    <div className="bg-white/10 px-4 py-1">
                        {/* Credits */}
                        <div className="text-sm font-semibold text-[#FF326A]">{item?.credit} Credits</div>
                    </div>
                </div>
                </div>
            ))}
            </div>
            {/* Team2 */}
            <div className="space-y-4 max-w-xs w-full ">
            {teamList?.roster2?.map((item, index) => (
                <div
                key={index}
                onClick={() => onSelectPlayer(item)}
                className={`flex ${selectedPlayers.includes(item) ? 'border-white border-2' : 'border-slate-500  hover:border hover:border-white '} rounded-md w-full border-collapse cursor-pointer bg-white/20 border `}
                >
                    <div className="w-[110px] h-[87px] ">
                        <img
                            className="w-full h-full border border-white rounded-md object-cover"
                            src={
                            item?.image_url
                                ? item?.image_url
                                : "https://th.bing.com/th/id/OIP.Qdgnl8QbAFqxyzIj6OqrDwHaFL?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            }
                            alt=""
                        />
                    </div>
                <div className="w-full flex flex-col justify-between">
                    <div className="px-4 py-1">
                        {/* Name */}
                        <div className="text-lg font-semibold">{item?.name}</div>
                        {/* Kd */}
                        <div className="text-sm">KD {item?.first_kill_percentage}</div>
                    </div>
                    <div className="bg-white/10 px-4 py-1">
                        {/* Credits */}
                        <div className="text-sm font-semibold text-[#FF326A]">{item?.credit} Credits</div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        {/* Preview Selection */}
        <div className="mx-4 py-4 pb-8">
            <button className="w-full uppercase font-semibold rounded-lg h-14 bg-[#FF326A] flex items-center justify-center">Preview Selection</button>
        </div>                  
      </div>
    </div>
  );
};

export default Teams;
