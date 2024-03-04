
export interface Slug<T = string> {
    location: string;
    language: LanguageEnum;
    heading: string;
    body: T;
}

export enum LanguageEnum {
    ENG = 'ENG',
    SP = 'SP'
}

export interface ListBlock extends Slug<string[]>{
    headingTwo: string;    
}

export interface ScheduleEN {
    location: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}
export interface ScheduleSP {
    location: string;
    Lunes: string;
    Martes: string;
    Miercoles: string;
    Jueves: string;
    Viernes: string;
    Sabado: string;
    Domingo: string;
}

export interface Employee {
    location: string;
    spokenLanguage: LanguageEnum;
    name: string;
    email: string;
    phone: string;
    employeeType: string;
}

export interface Address {
    location: string;
    street: string;
    state: string;
    zip: number | string;
    phone: string;
}

export interface ClassStartEnd {
    location: string;
    start: Date | string;
    end: Date | string;
    computerTest?: Date | string;
    writtentest?: Date | string
}

export interface WebDataObject {
    slug: Slug;
    blurb: ListBlock | null;
    schedule: Array<ScheduleEN | ScheduleSP>;
    classSE: ClassStartEnd[];
    eployees: Employee[];
    locationAddresses: Address[];
    detailsPage: string;
    schedulePage: string;
    faqs: Slug[];
}
