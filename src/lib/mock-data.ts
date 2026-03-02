export interface Personnel {
  id: string;
  rankCode: number;
  rankTitle: string;
  fullName: string;
  badgeNumber: string;
  dateOfBirth: string;
  dateOfJoining: string;
  gender: string;
  category: string;
  phone: string;
  homeDistrict: string;
  unitId: string;
  unitName: string;
  districtId: string;
  status: "Active" | "On Leave" | "Suspended" | "Retired";
  recordType: "Clean" | "Adverse";
  presentFrom: string;
  previousUnit?: string;
  previousFrom?: string;
  previousTo?: string;
  remarks?: string;
}

export interface LeaveRequest {
  id: string;
  personnelId: string;
  personnelName: string;
  personnelRank: string;
  leaveType: string;
  dateFrom: string;
  dateTo: string;
  totalDays: number;
  reason: string;
  status: "Draft" | "Submitted" | "L1_Approved" | "L2_Approved" | "Final_Approved" | "Rejected" | "Cancelled";
  appliedOn: string;
  unitName: string;
}

export const mockPersonnel: Personnel[] = [
  { id: "1", rankCode: 7, rankTitle: "ASP", fullName: "SONAM WANGCHUK BHUTIA", badgeNumber: "SKP-0342", dateOfBirth: "1985-03-15", dateOfJoining: "2010-06-01", gender: "Male", category: "ST", phone: "9832012345", homeDistrict: "East Sikkim", unitId: "mintokgang", unitName: "Mintokgang PS", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2024-07-21", previousUnit: "Sadar PS", previousFrom: "2024-02-12", previousTo: "2024-07-21" },
  { id: "2", rankCode: 8, rankTitle: "DSP", fullName: "KARMA DOMA LEPCHA", badgeNumber: "SKP-0198", dateOfBirth: "1982-11-20", dateOfJoining: "2008-03-15", gender: "Female", category: "ST", phone: "9832098765", homeDistrict: "North Sikkim", unitId: "sadar", unitName: "Sadar PS", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2023-12-01" },
  { id: "3", rankCode: 10, rankTitle: "SI", fullName: "PEMA TSHERING SHERPA", badgeNumber: "SKP-0567", dateOfBirth: "1990-07-08", dateOfJoining: "2015-01-10", gender: "Male", category: "OBC", phone: "9734056789", homeDistrict: "West Sikkim", unitId: "rangpo", unitName: "Rangpo PS", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2024-01-15", previousUnit: "Traffic Wing", previousFrom: "2022-06-01", previousTo: "2024-01-15" },
  { id: "4", rankCode: 12, rankTitle: "HC", fullName: "DAWA NORBU TAMANG", badgeNumber: "SKP-1023", dateOfBirth: "1988-05-22", dateOfJoining: "2012-08-20", gender: "Male", category: "OBC", phone: "9832145678", homeDistrict: "South Sikkim", unitId: "jorethang", unitName: "Jorethang PS", districtId: "south", status: "Active", recordType: "Clean", presentFrom: "2023-06-10" },
  { id: "5", rankCode: 13, rankTitle: "Const", fullName: "TENZIN YANGZOM RAI", badgeNumber: "SKP-1456", dateOfBirth: "1995-09-14", dateOfJoining: "2020-04-01", gender: "Female", category: "General", phone: "9734098123", homeDistrict: "East Sikkim", unitId: "singtam", unitName: "Singtam PS", districtId: "east", status: "On Leave", recordType: "Clean", presentFrom: "2024-03-01" },
  { id: "6", rankCode: 5, rankTitle: "SP", fullName: "MANDEEP GURUNG", badgeNumber: "SKP-0045", dateOfBirth: "1978-01-30", dateOfJoining: "2005-07-15", gender: "Male", category: "General", phone: "9832067890", homeDistrict: "East Sikkim", unitId: "phq", unitName: "Police HQ", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2022-08-15" },
  { id: "7", rankCode: 9, rankTitle: "Insp", fullName: "PASSANG DORJEE BHUTIA", badgeNumber: "SKP-0289", dateOfBirth: "1984-12-05", dateOfJoining: "2009-11-20", gender: "Male", category: "ST", phone: "9832034567", homeDistrict: "West Sikkim", unitId: "gyalshing", unitName: "Gyalshing PS", districtId: "west", status: "Active", recordType: "Clean", presentFrom: "2024-04-01" },
  { id: "8", rankCode: 11, rankTitle: "ASI", fullName: "RINZING LHAMU SHERPA", badgeNumber: "SKP-0789", dateOfBirth: "1991-06-18", dateOfJoining: "2016-03-01", gender: "Female", category: "ST", phone: "9734045678", homeDistrict: "North Sikkim", unitId: "mangan", unitName: "Mangan PS", districtId: "north", status: "Active", recordType: "Clean", presentFrom: "2023-09-15" },
  { id: "9", rankCode: 13, rankTitle: "Const", fullName: "BIKASH CHETTRI", badgeNumber: "SKP-1567", dateOfBirth: "1997-02-28", dateOfJoining: "2021-07-01", gender: "Male", category: "General", phone: "9832178901", homeDistrict: "South Sikkim", unitId: "namchi", unitName: "Namchi PS", districtId: "south", status: "Active", recordType: "Adverse", presentFrom: "2024-05-10", remarks: "Disciplinary inquiry pending" },
  { id: "10", rankCode: 10, rankTitle: "SI", fullName: "TSHERING YANGCHEN LEPCHA", badgeNumber: "SKP-0612", dateOfBirth: "1989-04-12", dateOfJoining: "2014-09-15", gender: "Female", category: "ST", phone: "9734012345", homeDistrict: "East Sikkim", unitId: "cid", unitName: "CID Branch", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2024-02-20" },
  { id: "11", rankCode: 12, rankTitle: "HC", fullName: "LAKPA DORJEE SHERPA", badgeNumber: "SKP-1089", dateOfBirth: "1986-08-25", dateOfJoining: "2011-05-10", gender: "Male", category: "ST", phone: "9832156789", homeDistrict: "West Sikkim", unitId: "stf", unitName: "STF Unit", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2023-11-01" },
  { id: "12", rankCode: 13, rankTitle: "Const", fullName: "NIMA ONGMU BHUTIA", badgeNumber: "SKP-1678", dateOfBirth: "1998-10-03", dateOfJoining: "2022-01-15", gender: "Female", category: "ST", phone: "9734067890", homeDistrict: "North Sikkim", unitId: "sap-1bn", unitName: "SAP 1st Battalion", districtId: "east", status: "Active", recordType: "Clean", presentFrom: "2023-07-20" },
];

export const mockLeaveRequests: LeaveRequest[] = [
  { id: "L001", personnelId: "5", personnelName: "TENZIN YANGZOM RAI", personnelRank: "Const", leaveType: "CL", dateFrom: "2024-11-01", dateTo: "2024-11-03", totalDays: 3, reason: "Family function", status: "Submitted", appliedOn: "2024-10-28", unitName: "Singtam PS" },
  { id: "L002", personnelId: "3", personnelName: "PEMA TSHERING SHERPA", personnelRank: "SI", leaveType: "EL", dateFrom: "2024-11-10", dateTo: "2024-11-20", totalDays: 11, reason: "Annual vacation", status: "L1_Approved", appliedOn: "2024-10-25", unitName: "Rangpo PS" },
  { id: "L003", personnelId: "8", personnelName: "RINZING LHAMU SHERPA", personnelRank: "ASI", leaveType: "ML", dateFrom: "2024-11-05", dateTo: "2024-12-04", totalDays: 30, reason: "Medical treatment", status: "L2_Approved", appliedOn: "2024-10-30", unitName: "Mangan PS" },
  { id: "L004", personnelId: "9", personnelName: "BIKASH CHETTRI", personnelRank: "Const", leaveType: "CL", dateFrom: "2024-10-20", dateTo: "2024-10-21", totalDays: 2, reason: "Personal work", status: "Final_Approved", appliedOn: "2024-10-18", unitName: "Namchi PS" },
  { id: "L005", personnelId: "12", personnelName: "NIMA ONGMU BHUTIA", personnelRank: "Const", leaveType: "CL", dateFrom: "2024-11-15", dateTo: "2024-11-16", totalDays: 2, reason: "Family emergency", status: "Submitted", appliedOn: "2024-11-01", unitName: "SAP 1st Battalion" },
];

export const mockInventoryStats = {
  totalWeapons: 487,
  totalAmmoRounds: 125400,
  totalEquipment: 1234,
  lowStockAlerts: 5,
  expiringAmmo: 3,
  pendingTransfers: 8,
};

export const mockWeapons = [
  { serial: "INSAS-2021-0042", type: "INSAS Rifle", unit: "SAP 1st Battalion", assignedTo: "LAKPA DORJEE SHERPA", condition: "Serviceable", lastService: "2024-08-15", nextService: "2025-02-15" },
  { serial: "AK47-2019-0118", type: "AK-47", unit: "STF Unit", assignedTo: "PASSANG DORJEE BHUTIA", condition: "Serviceable", lastService: "2024-09-01", nextService: "2025-03-01" },
  { serial: "MP5-2022-0007", type: "MP5", unit: "STF Unit", assignedTo: null, condition: "Needs Repair", lastService: "2024-03-20", nextService: "2024-09-20" },
  { serial: "PISTOL-2020-0234", type: "9mm Pistol", unit: "CID Branch", assignedTo: "TSHERING YANGCHEN LEPCHA", condition: "Serviceable", lastService: "2024-07-10", nextService: "2025-01-10" },
  { serial: "SLR-2018-0089", type: "SLR", unit: "SAP 2nd Battalion", assignedTo: null, condition: "Condemned", lastService: "2023-12-01", nextService: null },
];

export const districtStrength = [
  { district: "East Sikkim", total: 145, active: 138, onLeave: 5, suspended: 2 },
  { district: "West Sikkim", total: 52, active: 49, onLeave: 2, suspended: 1 },
  { district: "North Sikkim", total: 38, active: 36, onLeave: 2, suspended: 0 },
  { district: "South Sikkim", total: 65, active: 62, onLeave: 2, suspended: 1 },
];

export const rankDistribution = [
  { rank: "SP+", count: 8 },
  { rank: "DSP/ASP", count: 14 },
  { rank: "Insp", count: 22 },
  { rank: "SI", count: 38 },
  { rank: "ASI", count: 32 },
  { rank: "HC", count: 56 },
  { rank: "Const", count: 130 },
];
