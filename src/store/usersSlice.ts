import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
    users: [
        {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            cv: {
                img: string | null;
                city: string;
                address: string;
                phoneNumber: string;
                dateOfBirth: string;
                workExp: {
                    companyName: string;
                    title: string;
                    enterYear: string;
                    exitYear: string;
                };

                educationExp: {
                    university: string;
                    major: string;
                    grade: string;
                };

                skills: string[];
                languages: string[];
            } | null;
        }
    ];
    currentUser: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        cv: {
            img: string | null;
            city: string;
            address: string;
            phoneNumber: string;
            dateOfBirth: string;
            workExp: {
                companyName: string;
                title: string;
                enterYear: string;
                exitYear: string;
            };

            educationExp: {
                university: string;
                major: string;
                grade: string;
            };

            skills: string[];
            languages: string[];
        } | null;
    } | null;
}

const initialState: InitialStateTypes = {
    users: [
        {
            id: "1",
            firstName: "sajjad",
            lastName: "sajjad",
            email: "sajjad@gmail.com",
            password: "aaaa1111",
            cv: {
                img: "images/123.png",
                city: "Tehran",
                address: "Tehran, Narmak",
                phoneNumber: "09121231212",
                dateOfBirth: "12/12/1400",
                workExp: {
                    companyName: "Makeen",
                    title: "Front Dev",
                    enterYear: "1400",
                    exitYear: "1401",
                },

                educationExp: {
                    university: "Elm o sanat",
                    major: "software",
                    grade: "Lisince",
                },
                skills: ["redux", "react"],
                languages: ["Farsi", "English"],
            },
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
        editUserReducer(state, action) {
            const readyForEdit = state.users.findIndex(
                (item) => item.id === state.currentUser?.id
            );
            state.users[readyForEdit].firstName = action.payload.firstName;
            state.users[readyForEdit].lastName = action.payload.lastName;
            state.users[readyForEdit].email = action.payload.email;
            state.users[readyForEdit].password = action.payload.password;
            state.currentUser = state.users[readyForEdit];
        },
        AddCv(state, action) {
            const readyForAddCv = state.users.findIndex(
                (item) => item.id === state.currentUser?.id
            );
            state.users[readyForAddCv].firstName = action.payload.firstName;
            state.users[readyForAddCv].lastName = action.payload.lastName;
            state.users[readyForAddCv].email = action.payload.email;
            state.users[readyForAddCv].cv = action.payload.cv;
            state.currentUser = state.users[readyForAddCv];
        },
    },
});

export const { signUpReducer, loginReducer, editUserReducer, AddCv } =
    usersSlice.actions;

export default usersSlice.reducer;
