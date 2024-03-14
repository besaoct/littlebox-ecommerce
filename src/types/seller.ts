// types/SellerCategories.ts

type StudentSeller = {
    type: "Student";
    // Define any specific properties related to student sellers here
  };
  
  type CreatorSeller = {
    type: "Creator";
    // Define any specific properties related to creator sellers here
  };
  
  type CampusSeller = {
    type: "Campus";
    // Define any specific properties related to campus sellers here
  };
  
  export type SellerCategories = StudentSeller | CreatorSeller | CampusSeller;
  