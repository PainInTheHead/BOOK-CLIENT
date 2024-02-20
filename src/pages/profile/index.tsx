import Layout from "@/layout/Layout";
import type { NextPageWithLayout } from "./../_app";
import type { ReactElement } from "react";
import ProfilePage from "@/views/ProfilePage/ProfilePage";

const Profile: NextPageWithLayout = () => {
  return <ProfilePage />;
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
