export interface DefaultDbType {
    users: UserType[];
    employer: EmployerType[];
    ads: AdsType[];
    categories: CategoriesTypes;
    currentUser: [] | null;
    currentEmployer: [] | null;
    currentAdmin: [] | null;
    articles: ArticlesTypes;
    comments: CommentsType;
}

interface UserType {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cv: CvType | null;
}

type CvType = [
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
];
interface EmployerType {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    logo: string;
    company: CompanyType[];
}

type CompanyType = {
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
};

interface AdsType {
    id: string;
    employerId: string;
    title: string;
    skillsNeed: string;
    advantages: string;
    contract: string[];
    showInfo: boolean;
}

type CategoriesTypes = [
    {
        id: string;
        title: string;
        link: string;
    },
    {
        id: string;
        title: string;
        link: string;
    }
];

type ArticlesTypes = [
    {
        id: string;
        title: string;
        subTitle: string;
        describtions: string;
        count: string;
        adminId: string;
        date: string;
    }
];

type CommentsType = [
    {
        id: string;
        articleId: string;
        text: string;
        email: string;
        name: string;
        isShow: boolean;
    }
];
