const kingdoms = {
  list: 'kingdoms/',
  one: (id: string) => `kingdoms/${id}`,
}

const subkingdoms = {
  list: 'subkingdoms/',
  one: (id: string) => `subkingdoms/${id}`,
}

const divisions = {
  list: 'divisions/',
  one: (id: string) => `divisions/${id}`,
  classes: 'division_classes/',
  classes_one: (id: string) => `division_classes/${id}`,
  orders: 'division_orders/',
  orders_one: (id: string) => `division_orders/${id}`
};

const families = {
  list: 'families/',
  one: (id: string) => `families/${id}`,
}

const genus = {
  list: 'genus/',
  one: (id: string) => `genus/${id}`,
  plants: (genus_id: string) => `genus/${genus_id}/plants`
};

const plants = {
  list: 'plants/',
  one: (id: string) => `plants/${id}`,
  search: (search_text: string) => `plants/search/q=${search_text}`
};

const species = {
  list: 'species/',
  one: (id: string) => `species/${id}`,
  search: (search_text: string) => `species/search/q=${search_text}`
};

const distributions = {
  list: 'distributions/',
  plants: (zone_id: string) => `distributions/${zone_id}/plants`
};

export {
  kingdoms,
  subkingdoms,
  divisions,
  families,
  genus,
  plants,
  species,
  distributions
};