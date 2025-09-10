import { SchoolMis } from "./schoolmis"
import { Onetp6s} from "./onetp6s"
import { Onetm3s } from "./onetm3s"
import { Nt } from "./nt"
import { Teacher } from "./teacher"
import { Cct } from "./cct"

export interface School {
    id: string
    moe_code: number
    smis_code: number
    obec_code: number
    school_name : string
    type_code: number
    type_education:string
    district_code:number
    district:string
    school_group_code: number
    school_group: number
    moo: string
    sub_distric:string
    zip_code:string
    lat:string
    long:string
    status:string
    schoolmis: SchoolMis[]
    nts: Nt[]
    onetp6s: Onetp6s[]
    onetm3s: Onetm3s[]
    teachers: Teacher[]
    ccts: Cct[]
}
