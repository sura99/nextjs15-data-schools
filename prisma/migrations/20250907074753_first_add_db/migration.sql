-- CreateTable
CREATE TABLE "public"."School" (
    "id" SERIAL NOT NULL,
    "moe_code" INTEGER NOT NULL,
    "smis_code" INTEGER NOT NULL,
    "obec_code" INTEGER NOT NULL,
    "school_name" TEXT NOT NULL,
    "type_code" INTEGER NOT NULL,
    "type_education" TEXT NOT NULL,
    "district_code" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "school_group_code" INTEGER NOT NULL,
    "school_group" TEXT NOT NULL,
    "moo" TEXT NOT NULL,
    "sub_distric" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Onetp6" (
    "id" SERIAL NOT NULL,
    "smis_code" INTEGER NOT NULL,
    "moe_code" INTEGER NOT NULL,
    "school_name" TEXT NOT NULL,
    "year_exam" TEXT NOT NULL,
    "score_th" TEXT NOT NULL,
    "score_sci" TEXT NOT NULL,
    "score_math" TEXT NOT NULL,
    "score_eng" TEXT NOT NULL,
    "score_average" TEXT NOT NULL,

    CONSTRAINT "Onetp6_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Onetm3" (
    "id" SERIAL NOT NULL,
    "smis_code" INTEGER NOT NULL,
    "moe_code" INTEGER NOT NULL,
    "school_name" TEXT NOT NULL,
    "year_exam" TEXT NOT NULL,
    "score_th" TEXT NOT NULL,
    "score_sci" TEXT NOT NULL,
    "score_math" TEXT NOT NULL,
    "score_eng" TEXT NOT NULL,
    "score_average" TEXT NOT NULL,

    CONSTRAINT "Onetm3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Nt" (
    "id" SERIAL NOT NULL,
    "smis_code" INTEGER NOT NULL,
    "moe_code" INTEGER NOT NULL,
    "school_name" TEXT NOT NULL,
    "year_exam" TEXT NOT NULL,
    "math_avg" TEXT NOT NULL,
    "math_sd" TEXT NOT NULL,
    "th_avg" TEXT NOT NULL,
    "th_sd" TEXT NOT NULL,
    "total_avg" TEXT NOT NULL,
    "total_sd" TEXT NOT NULL,

    CONSTRAINT "Nt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Schoolmis" (
    "id" SERIAL NOT NULL,
    "year_data" TEXT NOT NULL,
    "smis_code" INTEGER NOT NULL,
    "moe_code" INTEGER NOT NULL,
    "school_name" TEXT NOT NULL,
    "nursery1_male" TEXT NOT NULL,
    "nursery1_female" TEXT NOT NULL,
    "nursery1_total" TEXT NOT NULL,
    "nursery1_room" TEXT NOT NULL,
    "nursery2_male" TEXT NOT NULL,
    "nursery2_female" TEXT NOT NULL,
    "nursery2_total" TEXT NOT NULL,
    "nursery2_room" TEXT NOT NULL,
    "nursery3_male" TEXT NOT NULL,
    "nursery3_female" TEXT NOT NULL,
    "nursery3_total" TEXT NOT NULL,
    "nursery3_room" TEXT NOT NULL,
    "nursery_male_total" TEXT NOT NULL,
    "nursery_female_total" TEXT NOT NULL,
    "nursery_total" TEXT NOT NULL,
    "nursery_room_total" TEXT NOT NULL,
    "primary1_male" TEXT NOT NULL,
    "primary1_female" TEXT NOT NULL,
    "primary1_total" TEXT NOT NULL,
    "primary1_room" TEXT NOT NULL,
    "primary2_male" TEXT NOT NULL,
    "primary2_female" TEXT NOT NULL,
    "primary2_total" TEXT NOT NULL,
    "primary2_room" TEXT NOT NULL,
    "primary3_male" TEXT NOT NULL,
    "primary3_female" TEXT NOT NULL,
    "primary3_total" TEXT NOT NULL,
    "primary3_room" TEXT NOT NULL,
    "primary4_male" TEXT NOT NULL,
    "primary4_female" TEXT NOT NULL,
    "primary4_total" TEXT NOT NULL,
    "primary4_room" TEXT NOT NULL,
    "primary5_male" TEXT NOT NULL,
    "primary5_female" TEXT NOT NULL,
    "primary5_total" TEXT NOT NULL,
    "primary5_room" TEXT NOT NULL,
    "primary6_male" TEXT NOT NULL,
    "primary6_female" TEXT NOT NULL,
    "primary6_total" TEXT NOT NULL,
    "primary6_room" TEXT NOT NULL,
    "primary_male_total" TEXT NOT NULL,
    "primary_female_total" TEXT NOT NULL,
    "primary_total" TEXT NOT NULL,
    "primary_room_total" TEXT NOT NULL,
    "secondary1_male" TEXT NOT NULL,
    "secondary1_female" TEXT NOT NULL,
    "secondary1_total" TEXT NOT NULL,
    "secondary1_room" TEXT NOT NULL,
    "secondary2_male" TEXT NOT NULL,
    "secondary2_female" TEXT NOT NULL,
    "secondary2_total" TEXT NOT NULL,
    "secondary2_room" TEXT NOT NULL,
    "secondary3_male" TEXT NOT NULL,
    "secondary3_female" TEXT NOT NULL,
    "secondary3_total" TEXT NOT NULL,
    "secondary3_room" TEXT NOT NULL,
    "lower_secondary_male_total" TEXT NOT NULL,
    "lower_secondary_female_total" TEXT NOT NULL,
    "lower_secondary_total" TEXT NOT NULL,
    "lower_secondary_room_total" TEXT NOT NULL,
    "secondary4_male" TEXT NOT NULL,
    "secondary4_female" TEXT NOT NULL,
    "secondary4_total" TEXT NOT NULL,
    "secondary4_room" TEXT NOT NULL,
    "secondary5_male" TEXT NOT NULL,
    "secondary5_female" TEXT NOT NULL,
    "secondary5_total" TEXT NOT NULL,
    "secondary5_room" TEXT NOT NULL,
    "secondary6_male" TEXT NOT NULL,
    "secondary6_female" TEXT NOT NULL,
    "secondary6_total" TEXT NOT NULL,
    "secondary6_room" TEXT NOT NULL,
    "upper_secondary_male_total" TEXT NOT NULL,
    "upper_secondary_female_total" TEXT NOT NULL,
    "upper_secondary_total" TEXT NOT NULL,
    "upper_secondary_room_total" TEXT NOT NULL,
    "total_male" TEXT NOT NULL,
    "total_female" TEXT NOT NULL,
    "total_all" TEXT NOT NULL,
    "total_room" TEXT NOT NULL,

    CONSTRAINT "Schoolmis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_moe_code_key" ON "public"."School"("moe_code");

-- CreateIndex
CREATE UNIQUE INDEX "School_smis_code_key" ON "public"."School"("smis_code");

-- CreateIndex
CREATE UNIQUE INDEX "School_obec_code_key" ON "public"."School"("obec_code");

-- AddForeignKey
ALTER TABLE "public"."Onetp6" ADD CONSTRAINT "Onetp6_smis_code_fkey" FOREIGN KEY ("smis_code") REFERENCES "public"."School"("smis_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Onetm3" ADD CONSTRAINT "Onetm3_smis_code_fkey" FOREIGN KEY ("smis_code") REFERENCES "public"."School"("smis_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Nt" ADD CONSTRAINT "Nt_smis_code_fkey" FOREIGN KEY ("smis_code") REFERENCES "public"."School"("smis_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Schoolmis" ADD CONSTRAINT "Schoolmis_smis_code_fkey" FOREIGN KEY ("smis_code") REFERENCES "public"."School"("smis_code") ON DELETE RESTRICT ON UPDATE CASCADE;
