export const RANK_HIERARCHY = [
  { code: 1, abbr: "DGP", title: "Director General of Police", category: "IPS Gazetted" },
  { code: 2, abbr: "ADGP", title: "Additional Director General of Police", category: "IPS Gazetted" },
  { code: 3, abbr: "IGP", title: "Inspector General of Police", category: "IPS Gazetted" },
  { code: 4, abbr: "DIG", title: "Deputy Inspector General of Police", category: "IPS Gazetted" },
  { code: 5, abbr: "SP", title: "Superintendent of Police", category: "IPS Gazetted" },
  { code: 6, abbr: "Addl. SP", title: "Additional Superintendent of Police", category: "Gazetted" },
  { code: 7, abbr: "ASP", title: "Assistant Superintendent of Police", category: "Gazetted" },
  { code: 8, abbr: "DSP", title: "Deputy Superintendent of Police", category: "Gazetted" },
  { code: 9, abbr: "Insp", title: "Inspector of Police", category: "Non-Gazetted" },
  { code: 10, abbr: "SI", title: "Sub-Inspector", category: "Non-Gazetted" },
  { code: 11, abbr: "ASI", title: "Assistant Sub-Inspector", category: "Non-Gazetted" },
  { code: 12, abbr: "HC", title: "Head Constable", category: "Non-Gazetted" },
  { code: 13, abbr: "Const", title: "Constable", category: "Non-Gazetted" },
] as const;

export const DISTRICTS = [
  { id: "east", name: "East Sikkim" },
  { id: "west", name: "West Sikkim" },
  { id: "north", name: "North Sikkim" },
  { id: "south", name: "South Sikkim" },
] as const;

export const UNITS = [
  { id: "phq", name: "Police Headquarters", district: "east", type: "HQ" },
  { id: "mintokgang", name: "Mintokgang PS", district: "east", type: "PS" },
  { id: "sadar", name: "Sadar PS", district: "east", type: "PS" },
  { id: "rangpo", name: "Rangpo PS", district: "east", type: "PS" },
  { id: "singtam", name: "Singtam PS", district: "east", type: "PS" },
  { id: "jorethang", name: "Jorethang PS", district: "south", type: "PS" },
  { id: "namchi", name: "Namchi PS", district: "south", type: "PS" },
  { id: "gyalshing", name: "Gyalshing PS", district: "west", type: "PS" },
  { id: "mangan", name: "Mangan PS", district: "north", type: "PS" },
  { id: "sap-1bn", name: "SAP 1st Battalion", district: "east", type: "Battalion" },
  { id: "sap-2bn", name: "SAP 2nd Battalion", district: "east", type: "Battalion" },
  { id: "traffic", name: "Traffic Wing", district: "east", type: "Wing" },
  { id: "cid", name: "CID Branch", district: "east", type: "Wing" },
  { id: "stf", name: "STF Unit", district: "east", type: "Wing" },
] as const;

export const LEAVE_TYPES = [
  { code: "CL", name: "Casual Leave", maxDays: 12 },
  { code: "EL", name: "Earned Leave", maxDays: 30 },
  { code: "ML", name: "Medical Leave", maxDays: 180 },
  { code: "ML-Mat", name: "Maternity Leave", maxDays: 180 },
  { code: "PL", name: "Paternity Leave", maxDays: 15 },
  { code: "CCL", name: "Child Care Leave", maxDays: 730 },
  { code: "SPL", name: "Special Duty Leave", maxDays: 30 },
  { code: "EOL", name: "Extra Ordinary Leave", maxDays: 365 },
  { code: "HPL", name: "Half Pay Leave", maxDays: 180 },
  { code: "SL", name: "Study Leave", maxDays: 730 },
] as const;

export const INVENTORY_CATEGORIES = [
  { code: "WPNS", name: "Weapons / Firearms", icon: "🔫" },
  { code: "AMMO", name: "Ammunition", icon: "💥" },
  { code: "VEST", name: "Body Protection", icon: "🛡️" },
  { code: "COMM", name: "Communication", icon: "📡" },
  { code: "VHCL", name: "Vehicles", icon: "🚔" },
  { code: "MED", name: "Medical", icon: "🏥" },
  { code: "MISC", name: "Miscellaneous", icon: "📦" },
] as const;
