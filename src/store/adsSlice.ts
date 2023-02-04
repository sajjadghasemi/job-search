import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
    ads: [
        {
            id: string;
            employerId: string;
            adsInfo: string;
            salary: string;
            advantages: string;
            fullTime: boolean;
            partTime: boolean;
            remote: boolean;
            trainee: boolean;
            showInfo: boolean;
            isShow: boolean;
        }
    ];
}

const initialState: InitialStateTypes = {
    ads: [
        {
            id: "1",
            employerId: "1",
            salary: "10 تا 18 میلیون",
            adsInfo: "برنامه نویس فرانت اند",
            advantages:
                "ناهار داریم، فلافل هم داریم، سرویس هم داریم، بیمه تکمیلی هم داریم",
            fullTime: true,
            partTime: false,
            remote: true,
            trainee: false,
            showInfo: true,
            isShow: true,
        },
    ],
};

const adsSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {
        addAds(state, action) {
            state.ads.push({
                id: `${new Date().getTime()}${String(Math.random()).slice(
                    3,
                    9
                )}`,
                employerId: action.payload.employerId,
                salary: action.payload.salary,
                adsInfo: action.payload.adsInfo,
                advantages: action.payload.advantages,
                fullTime: action.payload.fullTime,
                partTime: action.payload.partTime,
                remote: action.payload.remote,
                trainee: action.payload.trainee,
                showInfo: action.payload.showInfo,
                isShow: true,
            });
        },
    },
});

export const { addAds } = adsSlice.actions;

export default adsSlice.reducer;
