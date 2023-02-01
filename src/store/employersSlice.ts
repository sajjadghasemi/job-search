import { createSlice } from "@reduxjs/toolkit";

type EmployerType = [
    {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        logo: string;
        company: [
            {
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
                imgs: string[];
                rate: number;
                geo: [
                    {
                        let: string;
                        lan: string;
                    }
                ];
            }
        ];
    }
];

interface EmployersType {
    employers: [
        {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            logo: string | null;
            company:
                | [
                      {
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
                          imgs: string[];
                          rate: number;
                          geo: [
                              {
                                  let: string;
                                  lan: string;
                              }
                          ];
                      }
                  ]
                | null;
        }
    ];
    currentEmployer: EmployerType | null | undefined;
}

const initialState: EmployersType = {
    employers: [
        {
            id: "1",
            firstName: "sajjad",
            lastName: "sajjad",
            email: "employer@gmail.com",
            password: "aaaa1111",
            logo: "images/123.png",
            company: [
                {
                    name: "Makeen",
                    about: "lorem intir chiza",
                    companyEmail: "company@gmail.com",
                    activityTitle: "Web Dev",
                    city: "Tehran",
                    address: "Tehran, Narmak",
                    phoneNumber: "09121231212",
                    estYear: "1399",
                    membersCount: "100",
                    describtions: "Lorem ipsum is very good",
                    imgs: ["images/123.png"],
                    rate: 4,
                    geo: [
                        {
                            let: "1234",
                            lan: "4321",
                        },
                    ],
                },
            ],
        },
    ],
    currentEmployer: null,
};

const employersSlice = createSlice({
    name: "employers",
    initialState,
    reducers: {
        signUpReducer(state, action) {
            state.employers.push({
                id: `${new Date().getTime()}${String(Math.random()).slice(
                    3,
                    9
                )}`,
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
                (user) =>
                    user.email === action.payload.email &&
                    user.password === action.payload.password
            );
            state.currentEmployer = userCheck;
        },
    },
});

export const { signUpReducer, loginReducer } = employersSlice.actions;

export default employersSlice.reducer;
