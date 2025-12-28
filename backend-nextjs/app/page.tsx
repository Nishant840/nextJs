import axios from "axios";

async function getUserData(){
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

// in next we can make async component but only on server side
export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails?.name}
          </div>

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
