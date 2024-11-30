"use client";
import React, { useState } from "react";
import CardDiary from "@/components/Dashboard/CardDiary";
import Button from "@/components/navigation/Button";
import DiaryText from "@/components/Dashboard/DiaryText";
import { diaryApi } from "@/api";
// import location from '../../../../api/location';

const Dashboard = ({ newNote, setNewNote, newCheck, setNewCheck }) => {
  // const a = location.getLocation();
  const [value, setValue] = useState("");
  const handleAdd = () => {
    setNewCheck(true);
  };

<<<<<<< HEAD:frontend/src/app/(protected)/diary/dashboard/Dashboard.jsx
  const handleSave = async () => {
=======
  useEffect(() => {
    const authD = sessionStorage.getItem('authState');
    console.log(authD)
    const parsedAuth = JSON.parse(authD);
    console.log(parsedAuth)
    console.log(parsedAuth.user.id)
    const promisedData = diaryApi.getDiaries(parsedAuth.user.id);
    console.log(promisedData)

    promisedData.then((res) => {
      const dataArray = res.data.map(item => ({
        diaryId: item._id,
        title: item.title,
        content: item.content,
        locked: item.locked
      }))
      setUserDiaries(dataArray);

      console.log(userDiaries)
    })

  }, [])

  const handleClick = async () => {
    location.getLocation();
    const loc = sessionStorage.getItem("user-coordinate");
    console.log("session" + loc)
    const parsedLoc = JSON.parse(loc);
    const lat = parsedLoc.lat;
    const lon = parsedLoc.lon;
    console.log(lat)
    console.log(await weatherApi.getWeather(lat, lon));
  }

  const handleSave = async (e) => {
>>>>>>> 4c59288f22e32b5b2d08a421649347fb06314bee:.history/frontend/src/app/(protected)/diary/dashboard/Dashboard_20241128185151.jsx
    setNewCheck(false);
  
    try {
      const response = await diaryApi.createDiary({ content:value });
      console.log(response);
      if (response.status === 201) {
        alert("Your message has been submitted successfully!");
      } else {
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (e) {
      console.log("NO response");
      console.log(e);
    }
<<<<<<< HEAD

    const handleSave = async () => {
        setNewCheck(false);
        console.log(value);
        try {
            const response = await diaryApi.createDiary({ content: value })
            if (response.status === 200) {
                alert("Your diary has been saved successfully");
            } else {
                alert("There was an issue submitting your message. Please try again.");
            }
        }
        catch (e) {
            console.log("NO response");
            console.log(e)
        }
    }
    return (
        <div>
            <div className='grid grid-cols-[1fr_3fr] h-[90vh] gap-4 p-6 overflow-auto'>
                {/* notes */}
                <div className='border-2 border-black rounded-lg p-2 flex flex-col gap-2'>
                    <CardDiary title={"A day during study week.."}></CardDiary>
                    <CardDiary title={"Time spent on...."}></CardDiary>
                    <CardDiary title={"First ever Social Event..."}></CardDiary>
                </div>
                {/* right tools */}
                <div className='border-2 border-black rounded-lg flex flex-col'>
                    <div className='grid grid-cols-2 p-2 gap-2 '>
                        <div className='border-2 border-black p-2 rounded-lg'>
                            <h2 className='p-2 text-center text-lg font-semibold'>Today's thought</h2>
                            <p className='text-center font-md mb-4'>Everything you want is on the other side of fear</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center border-2 border-black rounded-lg p-2'>
                            <div className=' p-2 rounded-lg'>
                                <img src='https://c.animaapp.com/ldsw5inR/img/image-2@2x.png' alt='location' className='h-[50px]'></img>
                            </div>
                            <div>
                                <Button>GRANT ACCESS</Button>
                            </div>
                        </div>
                    </div>
                    <div className='p-2'>
                        <div className='border-black border-2 h-[500px] grid place-items-center'>
                            {
                                newCheck ?
                                    (<DiaryText value={value} setValue={setValue} handleSave={handleSave}></DiaryText>) :
                                    (<div>
                                        <Button onClick={handleAdd}>Add</Button>
                                    </div>)
                            }
                            {/*  */}


                        </div>
                    </div>
                </div>
=======
  };
  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr] h-[90vh] gap-4 p-6 overflow-auto">
        {/* notes */}
        <div className="border-2 border-black rounded-lg p-2 flex flex-col gap-2">
          <CardDiary title={"A day during study week.."}></CardDiary>
          <CardDiary title={"Time spent on...."}></CardDiary>
          <CardDiary title={"First ever Social Event..."}></CardDiary>
        </div>
        {/* right tools */}
        <div className="border-2 border-black rounded-lg flex flex-col">
          <div className="grid grid-cols-2 p-2 gap-2 ">
            <div className="border-2 border-black p-2 rounded-lg">
              <h2 className="p-2 text-center text-lg font-semibold">
                Today's thought
              </h2>
              <p className="text-center font-md mb-4">
                Everything you want is on the other side of fear
              </p>
>>>>>>> 163eeb339e50e8e781b6baef6a601f2ab58da100
            </div>
            <div className="flex flex-col gap-2 items-center justify-center border-2 border-black rounded-lg p-2">
              <div className=" p-2 rounded-lg">
                <img
                  src="https://c.animaapp.com/ldsw5inR/img/image-2@2x.png"
                  alt="location"
                  className="h-[50px]"
                ></img>
              </div>
              <div>
                <Button>GRANT ACCESS</Button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="border-black border-2 h-[500px] grid place-items-center">
              {newCheck ? (
                <DiaryText
                  value={value}
                  setValue={setValue}
                  handleSave={handleSave}
                ></DiaryText>
              ) : (
                <div>
                  <Button onClick={handleAdd}>Add</Button>
                </div>
              )}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
