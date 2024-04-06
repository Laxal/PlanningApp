import { Outlet, useParams } from "react-router-dom";

export const UserPage = () =>
{
  const params = useParams();

  return (
    <>
      UserPage { JSON.stringify( params ) }
      <Outlet/>
    </>
  )
}