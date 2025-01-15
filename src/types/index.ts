export interface User {
  name: string,
  trackId: number,
  email: string,
  phoneNumber: string,
  cohort: number,
  location: string
}

export interface Errors {
  name: string,
  registration: string
  track: string,
  cohort: string
  email: string,
  phoneNumber: string,
  location: string
}

export interface Track {
  id: number,
  title: string,
  description: string
}

export interface Cohort {
  id: number,
  title: string,
  startDate: string
}

