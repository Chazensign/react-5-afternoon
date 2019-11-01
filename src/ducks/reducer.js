  const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
  }

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPTERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'
const UPDATE_FOUND = 'UPDATE_FOUND'
const UPDATE_AGENT = "UPDATE_AGENT"
const UPDATE_COST = "UPDATE_COST"
const UPDATE_DOWN_PAYMENT = "UPDATE_DOWN_PAYMENT"
const UPDATE_CREDIT = "UPDATE_CREDIT"
const UPDATE_HISTORY = "UPDATE_HISTORY"
const UPDATE_ADDRESS_1 = "UPDATE_ADDRESS_1"
const UPDATE_ADDRESS_2 = "UPDATE_ADDRESS_2"
const UPDATE_ADDRESS_3 = "UPDATE_ADDRESS_3"
const UPDATE_FIRST = "UPDATE_FIRST"
const UPDATE_LAST = "UPDATE_LAST"
const UPDATE_EMAIL = "UPDATE_EMAIL"

  function reducer( state = initialState, action ) {
    switch (action.type) {
      case UPDATE_AGENT:
      return {...state,  realEstateAgent: action.payload }

      case UPDATE_COST:
      return {...state,  cost: action.payload}

      case UPDATE_DOWN_PAYMENT:
      return {...state,  downPayment: action.payload}

      case UPDATE_CREDIT:
      return {...state,  credit: action.payload}

      case UPDATE_HISTORY:
      return {...state,  history: action.payload}

      case UPDATE_ADDRESS_1:
      return {...state,  addressOne: action.payload}

      case UPDATE_ADDRESS_2:
      return {...state,  addressTwo: action.payload}

      case UPDATE_ADDRESS_3:
      return {...state,  addressThree: action.payload}

      case UPDATE_FIRST:
      return {...state,  firstName: action.payload}

      case UPDATE_LAST:
      return {...state,  lastName: action.payload}

      case UPDATE_EMAIL:
      return {...state,  email: action.payload}

      case UPDATE_LOAN_TYPE:
        return { ...state, loanType: action.payload }

      case UPDATE_PROPTERTY_TYPE:
        return { ...state, propertyType: action.payload }

      case UPDATE_CITY:
        return { ...state, city: action.payload}

      case UPDATE_PROP:
        return { ...state, propToBeUsedOn: action.payload }

      default:
        return state

        case UPDATE_FOUND:
          return {...state, found: action.payload}
    }
  }
  export function updateProp(prop) {
    return {
    type: UPDATE_PROP,
    payload: prop
    }
  }
  export function updateLoanType(loanType) {
    return {
      type: UPDATE_LOAN_TYPE,
      payload:loanType
    }
  }

  export function updatePropertyType(property) {
    return {
      type: UPDATE_PROPTERTY_TYPE,
      payload:property
    }
  }

  export function updateCity(city){
    console.log(city)
    return {
      type: UPDATE_CITY,
      payload: city
    }
  }
  export function updateFound(found) {
    return{
      type: UPDATE_FOUND,
      payload: found
    }
  }
  export function updateAgent(agent) {
    return {
      type: UPDATE_AGENT,
      payload: agent
    }
  }

  export function updateCost(cost) {
    return {
      type: UPDATE_COST,
      payload: cost
    }
  }

  export function updateDownPayment(payment) {
    return {
      type: UPDATE_DOWN_PAYMENT,
      payload: payment
    }
  }

  export function updateCredit(credit) {
    return {
      type: UPDATE_CREDIT,
      payload: credit
    }
  }

  export function updateHistory(history) {
    return {
      type: UPDATE_HISTORY,
      payload: history
    }
  }

  export function updateAddress1(address) {
    return {
      type: UPDATE_ADDRESS_1,
      payload: address
    }
  }

  export function updateAddress2(address) {
    return {
      type: UPDATE_ADDRESS_2,
      payload: address
    }
  }

  export function updateAddress3(address) {
    return {
      type: UPDATE_ADDRESS_3,
      payload: address
    }
  }

  export function updateFirst(first) {
    return {
      type: UPDATE_FIRST,
      payload: first
    }
  }

  export function updateLast(last) {
    return {
      type: UPDATE_LAST,
      payload: last
    }
  }

  export function updateEmail(email) {
    return {
      type: UPDATE_EMAIL,
      payload: email
    }
  }

export default reducer