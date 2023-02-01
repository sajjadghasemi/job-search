import { createSlice } from "@reduxjs/toolkit";

type UserType = [
    {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        cv:
            | [
                  {
                      img: string;
                      city: string;
                      address: string;
                      phoneNumber: string;
                      dateOfBirth: string;
                      workExp: [
                          {
                              companyName: string;
                              title: string;
                              enterYear: string;
                              exitYear: string;
                          }
                      ];
                      educationExp: [
                          {
                              university: string;
                              major: string;
                              grade: string;
                          }
                      ];
                      skills: string[];
                      languages: string[];
                  }
              ]
            | null;
    }
];

interface UsersType {
    users: [
        {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            cv:
                | [
                      {
                          img: string;
                          city: string;
                          address: string;
                          phoneNumber: string;
                          dateOfBirth: string;
                          workExp: [
                              {
                                  companyName: string;
                                  title: string;
                                  enterYear: string;
                                  exitYear: string;
                              }
                          ];
                          educationExp: [
                              {
                                  university: string;
                                  major: string;
                                  grade: string;
                              }
                          ];
                          skills: string[];
                          languages: string[];
                      }
                  ]
                | null;
        }
    ];
    currentUser: UserType | null;
}

const initialState: UsersType = {
    users: [
        {
            id: "1",
            firstName: "sajjad",
            lastName: "sajjad",
            email: "sajjad@gmail.com",
            password: "aaaa1111",
            cv: [
                {
                    img: "images/123.png",
                    city: "Tehran",
                    address: "Tehran, Narmak",
                    phoneNumber: "09121231212",
                    dateOfBirth: "12/12/1400",
                    workExp: [
                        {
                            companyName: "Makeen",
                            title: "Front Dev",
                            enterYear: "1400",
                            exitYear: "1401",
                        },
                    ],
                    educationExp: [
                        {
                            university: "Elm o sanat",
                            major: "software",
                            grade: "Lisince",
                        },
                    ],
                    skills: ["redux", "react"],
                    languages: ["Farsi", "English"],
                },
            ],
        },
    ],
    currentUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        signUpReducer(state, action) {
            state.users.push({
                id: `${new Date().getTime()}${String(Math.random()).slice(
                    3,
                    9
                )}`,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
                cv: null,
            });
        },
        loginReducer(state, action) {
            // bug
            const userCheck: any = state.users.find(
                (user) =>
                    user.email === action.payload.email &&
                    user.password === action.payload.password
            );
            state.currentUser = userCheck;
        },
    },
});

export const { signUpReducer, loginReducer } = usersSlice.actions;

export default usersSlice.reducer;
