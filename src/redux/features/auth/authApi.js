import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/users/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginuser) => ({
        url: "/users/login",
        method: "POST",
        body: loginuser,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users/all-users",
        method: "GET",
      }),
      refetchOnMount: true,
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/profile/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUserRoleAndPassword: builder.mutation({
      query: (userId, role, oldPassword, newPassword) => ({
        url: `/users/profile/${userId}`,
        method: "PUT",
        body: { role, oldPassword, newPassword },
      }),
    }),
    editUserProfile: builder.mutation({
      query: (profileData) => ({
        url: "/users/edit-profile",
        method: "PATCH",
        body: profileData,
        // {
        //   userId: profileData.userId,
        //   username: profileData.username,
        //   profileImage: profileData.profileImage,
        //   bio: profileData.bio,
        //   profession: profileData.profession,
        // },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useDeleteUserMutation,
  useEditUserProfileMutation,
  useGetUserQuery,
  useUpdateUserRoleAndPasswordMutation,
} = authApi;
export default authApi;
