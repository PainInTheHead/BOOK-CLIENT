import Layout from "@/components/layout/Layout";
import type { NextPageWithLayout } from "./../_app";
import type { ReactElement } from "react";
import ProfilePage from "@/components/PagesMainComponent/ProfilePage/ProfilePage";


const Profile: NextPageWithLayout = () => {
  return <ProfilePage/>
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
