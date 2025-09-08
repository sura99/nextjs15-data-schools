export interface SchoolMis {
    id: string
    year_data: string
    smis_code: number
    moe_code: number
    school_name : string
    nursery1_male : string
    nursery1_female : string
    nursery1_total : string
    nursery1_room : string
    nursery2_male : string
    nursery2_female : string
    nursery2_total : string
    nursery2_room : string
    nursery3_male : string
    nursery3_female : string
    nursery3_total : string
    nursery3_room : string

    //รวมอนุบาล
    nursery_male_total : string
    nursery_female_total : string
    nursery_total : string
    nursery_room_total : string

    // ประถม
    primary1_male:string
    primary1_female:string
    primary1_total:string
    primary1_room:string
    primary2_male:string
    primary2_female:string
    primary2_total:string
    primary2_room:string
    primary3_male:string
    primary3_female:string
    primary3_total:string
    primary3_room:string
    primary4_male:string
    primary4_female:string
    primary4_total:string
    primary4_room:string
    primary5_male:string
    primary5_female:string
    primary5_total:string
    primary5_room:string
    primary6_male:string
    primary6_female:string
    primary6_total:string
    primary6_room:string
    primary_male_total:string
    primary_female_total:string
    primary_total:string
    primary_room_total:string

    // ม.ต้น
    secondary1_male :string
    secondary1_female :string
    secondary1_total :string
    secondary1_room :string
    secondary2_male :string
    secondary2_female :string
    secondary2_total :string
    secondary2_room :string
    secondary3_male :string
    secondary3_female :string
    secondary3_total :string
    secondary3_room :string
    // รวม ม.ต้น
    lower_secondary_male_total: string
    lower_secondary_female_total: string
    lower_secondary_total: string
    lower_secondary_room_total: string

    // ม.ปลาย
    secondary4_male :string
    secondary4_female :string
    secondary4_total :string
    secondary4_room :string
    secondary5_male :string
    secondary5_female :string
    secondary5_total :string
    secondary5_room :string
    secondary6_male :string
    secondary6_female :string
    secondary6_total :string
    secondary6_room :string

    // รวม ม.ปลาย
    upper_secondary_male_total: string
    upper_secondary_female_total: string
    upper_secondary_total: string
    upper_secondary_room_total: string

    total_male:string
    total_female:string
    total_all :string
    total_room:string

}