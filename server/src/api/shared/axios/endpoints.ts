const kingdoms = {
  list: 'kingdoms',
  one: (id: number) => `kingdoms/${id}`,
}

const subkingdoms = {
  list: 'subkingdoms',
  one: (id: number) => `subkingdoms/${id}`,
}

const divisions = {
  list: 'divisions',
  one: (id: number) => `divisions/${id}`,
  classes: 'division_classes',
  classes_one: (id: number) => `division_classes/${id}`,
  orders: 'division_orders',
  orders_one: (id: number) => `division_orders/${id}`
};

const families = {
  list: 'families',
  one: (id: number) => `families/${id}`,
}

const genus = {
  list: 'genus',
  one: (id: number) => `genus/${id}`,
  plants: (genus_id: number) => `genus/${genus_id}/plants`
};

const plants = {
  list: 'plants',
  one: (id: number) => `plants/${id}`,
  search: (search_text: string) => `plants/search?q=${search_text}`
};

const species = {
  list: 'species',
  one: (id: number) => `species/${id}`,
  search: (search_text: string) => `species/search?q=${search_text}`
};

const distributions = {
  list: 'distributions',
  one: (id: number) => `distributions/${id}`,
  plants: (zone_id: number) => `distributions/${zone_id}/plants`
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