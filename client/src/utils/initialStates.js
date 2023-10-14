module.exports = Object.freeze({
  TEACHER_INITIAL_STATE: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    pasport: "",
    subject: "",
  },
  PUPIL_INITIAL_STATE: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homePhone: "",
    age: "",
    location: "",
    pasport: "",
    subject: "",
    cupon: "",
    gender: "male",
    teacher: "",
    course: "",
  },
  COURSE_INITIAL_STATE: {
    teacher: [],
    pupil: [],
    type: "",
    name: "",
    cost: "",
    time: "",
    pupilQuantity: "11",
    isAktive: true,
  },
  FEE_INITIAL_STATE: {
    firstName: "",
    lastName: "",
    startDate: "",
    endDate: "",
    pasport: "",
  },
});