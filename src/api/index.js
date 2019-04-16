const activities = {
    '12334345':{
        id:"12134132",
        title: 'Learn .js',
        notes: 'i started today and it was good',
        progress: 0,
        category: '1232432432',
        createdAt: 13242342342,
        updatedAt: 13242342333
    } ,
    '12312323434':{
        id: "2134234234",
        title: 'Play devil may cry 5',
        notes: 'i started today and it was awesomme',
        progress: 0,
        category: '64378257835',
        createdAt: 82948349,
        updatedAt: 2784853443       
  }
}

export const fetchActivities = () => {
    
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(activities)
      }, 2000)
  })
}

const generateUid = () => Math.floor(new Date() * Math.random());

export const createActivityAPI = (activity) => {
    activity.id = generateUid();
    activity.progress = 0;
    activity.createdAt = new Date();
    activity.updatedAt = new Date();
    return new Promise((resolve, reject) => {
        resolve(activity);
    })
}

export const fetchCategories = () => {
    return {
        '12313241343': {
             id: '1324245',
             text: 'books'
        },
        '13432143214': {
            id: '1343223',
            text: 'games'
        }
    }
}

export const fetchUser = () => {
    return {
        name: 'Rick Starks',
        id: '452452'
    }
}