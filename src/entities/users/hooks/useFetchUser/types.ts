export type fetchUsersResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;

  login: UserLogin;
  address: UserAddress;
  company: UserCompany;

  website: string;
  phone: string;
};

export type UserLogin = {
  uuid: string;
  username: string;
  password: string;
  md5: string;
  sha1: string;
  registered: string;
};

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
