import React from "react";
import { auth, signOut } from "../auth";
import { Users } from "../library/models";
import { checkfetchUser } from "../library/data";

const Dashboard = async () => {
  const session = await auth();
  //console.log(session);

  const checkaa = await checkfetchUser();

  if (checkaa?.length == 0) {
    console.log("data Exist");
  } else {
    console.log("data not Exist");
  }

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Dashboard;
