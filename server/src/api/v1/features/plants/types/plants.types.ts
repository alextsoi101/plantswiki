export type Kingdom = {
  id: number;
  name?: string;
  slug?: string;
  links?: {};
};

export type KingdomOne = {
  data: Kingdom;
  meta: {};
};

export type KingdomList = {
  data: Kingdom[];
  links?: {};
  meta: {};
};

export type SubKingdom = {
  id: number;
  name?: string;
  slug?: string;
  links?: {};
  kingdom: Kingdom;
};

export type SubKingdomOne = {
  data: SubKingdom;
  meta: {};
};

export type SubKingdomList = {
  data: SubKingdom[];
  links?: {};
  meta: {};
};

export type Division = {
  id: number;
  name?: string;
  slug?: string;
  links?: {};
  subkingdom: SubKingdom,
};

export type DivisionOne = {
  data: Division;
  meta: {};
};

export type DivisionList = {
  data: Division[];
  links?: {};
  meta: {};
};

export type DivisionClass = {
  id: number;
  name?: string;
  slug?: string;
  links?: {};
  division: Division,
};

export type DivisionClassOne = {
  data: DivisionClass;
  meta: {};
};

export type DivisionClassList = {
  data: DivisionClass[];
  links?: {};
  meta: {};
};

export type DivisionOrder = {
  id: number;
  name?: string;
  slug?: string;
  links?: {};
  division_class: DivisionClass,
};

export type DivisionOrderOne = {
  data: DivisionOrder;
  meta: {};
};

export type DivisionOrderList = {
  data: DivisionOrder[];
  links?: {};
  meta: {};
};

export type Family = {
  id: number;
  name?: string;
  common_name?: string;
  slug?: string;
  links?: {};
  division_order?: DivisionOrder,
};

export type FamilyOne = {
  data: Family;
  meta: {};
};

export type FamilyList = {
  data: Family[];
  links?: {};
  meta: {};
};

export type Genus = {
  id: number;
  name?: string;
  slug?: string;
  links?: {};
  family: Family,
};

export type GenusOne = {
  data: Genus;
  meta: {};
};

export type GenusList = {
  data: Genus[];
  links?: {};
  meta: {};
};

export type Plant = {
  id: number,
  common_name?: string,
  slug?: string,
  scientific_name?: string,
  year?: number,
  bibliography?: string,
  author?: string,
  status?: string,
  rank?: string,
  family_common_name?: string,
  genus_id?: number,
  image_url?: string,
  synonyms?: [],
  genus?: string,
  family?: string,
  links?: {}
};

export type PlantOne = {
  data: {
    id: number,
    common_name?: string,
    slug?: string,
    scientific_name?: string,
    main_species_id?: number,
    image_url?: string,
    year?: number,
    bibliography?: string,
    author?: string,
    family_common_name?: string,
    genus_id?: number,
    observations?: string,
    vegetable?: boolean,
    links?: {},
    main_species?: {},
    genus?: {},
    family?: {},
    species?: [],
    subspecies?: [],
    varieties?: [],
    hybrids?: [],
    forms?: [],
    subvarieties?: [],
    sources?: []
  };
  meta: {};
};

export type PlantList = {
  data: Plant[];
  links?: {};
  meta: {};
};

export type PlantSearch = {
  data: Plant[];
  links?: {};
  meta: {};
};

export type PlantByZones = {
  data: Plant[];
  links?: {};
  meta: {};
};

export type PlantByGenus = {
  data: Plant[];
  links?: {};
  meta: {};
};

export type Species = {
  id: number,
  common_name?: string,
  slug?: string,
  scientific_name?: string,
  year?: number,
  bibliography?: string,
  author?: string,
  status?: string,
  rank?: string,
  family_common_name?: string,
  genus_id?: number,
  image_url?: string,
  synonyms?: [],
  genus?: string,
  family?: string,
  links?: {}
}

export type SpeciesOne = {
  data: {
    id: number,
    common_name?: string,
    slug?: string,
    scientific_name?: string,
    year?: number,
    bibliography?: string,
    author?: string,
    status?: string,
    rank?: string,
    family_common_name?: string,
    genus_id?: number,
    observations?: string,
    vegetable?: boolean,
    image_url?: string,
    genus?: string,
    family?: string,
    duration?: string,
    edible_part?: string,
    edible?: boolean,
    images?: {},
    common_names?: {},
    distribution?: {},
    distributions?: {},
    flower?: {},
    foliage?: {},
    fruit_or_seed?: {},
    specifications?: {},
    growth?: {},
    links?: {},
    synonyms?: [],
    sources?: []
  };
  meta: {};
};

export type SpeciesList = {
  data: Species[];
  links?: {};
  meta: {};
};

export type SpeciesSearch = {
  data: Species[];
  links?: {};
  meta: {};
};

export type Distribution = {
  id: number,
  name?: string,
  slug?: string,
  tdwg_code?: string,
  tdwg_level?: number,
  species_count?: number,
  links?: {},
  parent?: {},
  children?: []
};

export type DistributionOne = {
  data: Distribution;
  meta: {};
};

export type DistributionList = {
  data: Distribution[];
  links?: {};
  meta: {};
};

