import React from "react";
import HeaderBox from "@component/components/HeaderBox";
import TotalBalanceBox from "@component/components/TotalBalanceBox";
import RightSidebar from "@component/components/RightSidebar";
import { getLoggedInUser } from "@component/lib/actions/user.actions";
async function Home() {
  const loggedIn = await getLoggedInUser();
  // console.log("homeuser",loggedIn);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
      </div>
      {/* rigtsidebar */}
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.55 }, { currentBalance: 123.55 }]}
      />
    </section>
  );
}

export default Home;
