// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, addDoc, doc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFk1rFWcSKdUTMocsYTIQwmSu_8OgTDZA',
  authDomain: 'dew-loginvue.firebaseapp.com',
  projectId: 'dew-loginvue',
  storageBucket: 'dew-loginvue.firebasestorage.app',
  messagingSenderId: '824883249966',
  appId: '1:824883249966:web:f9e570e27446d81ad130bf',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class DatabaseConnection {
  constructor() {
    this.usersCollection = collection(db, 'users')
  }

  async createAccount(data) {
    try {
      const docRef = await addDoc(this.usersCollection, data)
      console.log('Documento escrito con ID: ', docRef.id)
      return docRef.id
    } catch (e) {
      console.error('Error añadiendo registro: ', e)
    }
  }

  async getAllUsers() {
    try {
      const querySnapshot = await getDocs(this.usersCollection)
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      console.log('Documentos:', dataList)
      return dataList
    } catch (error) {
      console.error('Error obteniendo documentos: ', error)
    }
  }

  async userExists(email) {
    const allUsers = await this.getAllUsers()
    let userExists = false
    if (allUsers) {
      allUsers.forEach((user) => {
        if (user.email == email) {
          console.log('Usuario encontrado!')
          userExists = true
        }
      })
    }
    return userExists
  }

  async authenticate(email, password) {
    const allUsers = await this.getAllUsers()
    let isAuthenticated = false
    if (allUsers) {
      allUsers.forEach((user) => {
        if (user.email == email && user.password == password) {
          console.log('Usuario loggeado!')
          isAuthenticated = true
        }
      })
    }
    return isAuthenticated
  }
}
