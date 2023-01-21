export const defaultDb = {
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
    employer: [
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
    ads: [
        {
            id: "1",
            employerId: "1",
            title: "Jounior Front developer",
            skillsNeed: "Lorem ipsum is very good",
            advantages: "Nahar midim",
            contract: ["full time", "part time"],
            showInfo: true,
        },
    ],
    categories: [
        {
            id: "1",
            title: "home",
            link: "/",
        },
        {
            id: "2",
            title: "articles",
            link: "/articles",
        },
    ],
    currentUser: [],
    currentEmployer: [],
    currentAdmin: [],
    articles: [
        {
            id: "1",
            title: "Learn redux",
            subTitle: "redux is very good",
            describtions: "lorem ipsum...",
            count: "12",
            adminId: "1",
            date: "12/12/1401",
        },
    ],
    comments: [
        {
            id: "1",
            articleId: "1",
            text: "lorem is gooddddd",
            email: "abolfazl@gmail.com",
            name: "abolfazl",
            isShow: false,
        },
    ],
};
