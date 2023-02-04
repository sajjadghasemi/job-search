import { createSlice } from '@reduxjs/toolkit';

interface InitialStateTypes {
  employers: [
    {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      logo: string | null;
      company: {
        name: string;
        about: string;
        companyEmail: string;
        activityTitle: string;
        city: string;
        address: string;
        phoneNumber: string;
        estYear: string;
        membersCount: string;
        describtions: string;
        imgs: string[] | null;
        rate: number | null;
        geo: string[] | null;
      } | null;
    }
  ];
  currentEmployer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    logo: string | null;
    company: {
      name: string;
      about: string;
      companyEmail: string;
      activityTitle: string;
      city: string;
      address: string;
      phoneNumber: string;
      estYear: string;
      membersCount: string;
      describtions: string;
      imgs: string[] | null;
      rate: number | null;
      geo: string[] | null;
    } | null;
  } | null;
}

const initialState: InitialStateTypes = {
  employers: [
    {
      id: '1',
      firstName: 'سجاد',
      lastName: 'قاسمی',
      email: 'employer@gmail.com',
      password: '1111',
      logo: 'images/123.png',
      company: {
        name: 'شرکت داده پرداز تهران',
        about: 'lorem intir chiza',
        companyEmail: 'company@gmail.com',
        activityTitle: 'برنامه نویسی',
        city: 'تهران تهران',
        address: 'نارمک بزرگراه رسالت',
        phoneNumber: '09121234567',
        estYear: '1391',
        membersCount: '100',
        describtions:
          'زمینه فعالیت توضیحات بیشتر مجموعه بین المللی کیکاووس زمان در دو حوزه تامین منابع انسانی و آموزش فعال می باشد. همکاری با شرکتهای نفت و گاز پتروشیمی، نیرو و ... از سوابق این شرکت می باشد.',
        imgs: ['images/123.png'],
        rate: 4,
        geo: ['1234', '4321'],
      },
    },
  ],
  currentEmployer: null,
};

const employersSlice = createSlice({
  name: 'employers',
  initialState,
  reducers: {
    signUpReducer(state, action) {
      state.employers.push({
        id: `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        company: null,
        logo: null,
      });
    },
    loginReducer(state, action) {
      // bug
      const userCheck: any = state.employers.find(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      state.currentEmployer = userCheck;
    },
    editReducer(state, action) {
      const readyForEdit = state.employers.findIndex(
        item => item.id === state.currentEmployer?.id
      );
      state.employers[readyForEdit].company = {
        name: action.payload.companyName,
        activityTitle: action.payload.activityTitle,
        city: action.payload.city,
        address: action.payload.address,
        phoneNumber: action.payload.phoneNumber,
        describtions: action.payload.describtion,
        companyEmail: action.payload.email,
        membersCount: action.payload.membersCount,
        about: action.payload.aboutCompany,
        estYear: action.payload.estYear,
        geo: null,
        imgs: null,
        rate: null,
      };
      state.currentEmployer = state.employers[readyForEdit];
    },
  },
});

export const { signUpReducer, loginReducer, editReducer } =
  employersSlice.actions;

export default employersSlice.reducer;
