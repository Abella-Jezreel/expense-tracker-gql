import { mergeResolvers } from "@graphql-tools/merge";
import transactionResolver from "./transaction.resolver";
import userResolver from "./user.resolver";

const mergedResolvers = mergeResolvers([transactionResolver, userResolver]);

export default mergedResolvers;

