import { users } from '../data/data.js';

const userResolver = {
    Query: {
        users: () => users,
    },
    Mutation: {}
};

export default userResolver;