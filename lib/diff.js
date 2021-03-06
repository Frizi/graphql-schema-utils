'use strict';

/**
 * Object containing metadata about a diff between two GraphQL types.
 */
class GraphQLDiff {
    /**
     * Create a new instance of a GraphQLDiff, containing metadata about a difference between two GraphQL types.
     * @param {GraphQLObjectType|GraphQLScalarType|GraphQLEnumType|GraphQLNonNull|GraphQLList|GraphQLUnionType} thisType the GraphQL type instance on which the `diff` method was executed
     * @param {GraphQLObjectType|GraphQLScalarType|GraphQLEnumType|GraphQLNonNull|GraphQLList|GraphQLUnionType} otherType the GraphQL type instance which was compared to thisType
     * @param {string} diffType the specific kind of difference between thisType and otherType
     * @param {string} description
     * @param {boolean} backwardsCompatible true if this is a non-breaking change when interpreted as thisType changing to otherType
     */
    constructor(thisType, otherType, diffType, description, backwardsCompatible) {
        this.thisType = thisType;
        this.otherType = otherType;
        this.diffType = diffType;
        this.description = description;
        this.backwardsCompatible = backwardsCompatible;
    }

    toString() {
        return '[diffType=' + this.diffType + ', description="' + this.description + '"]';
    }
}

/**
 * Constants representing valid types of GraphQLDiffs.
 * @type {{TypeDescriptionDiff: string, TypeMissing: string, TypeNameDiff: string, BaseTypeDiff: string, UnionTypeDiff: string, InterfaceDiff: string, FieldDescriptionDiff: string, FieldMissing: string, FieldDiff: string, ArgDescriptionDiff: string, ArgDiff: string, EnumDiff: string}}
 */
const DiffType = {
    TypeDescriptionDiff: "TypeDescriptionDiff",
    TypeMissing: "TypeMissing",
    TypeNameDiff: "TypeNameDiff",
    BaseTypeDiff: "BaseTypeDiff",
    UnionTypeDiff: "UnionTypeDiff",
    InterfaceDiff: "InterfaceDiff",
    FieldDescriptionDiff: "FieldDescriptionDiff",
    FieldMissing: "FieldMissing",
    FieldDiff: "FieldDiff",
    ArgDescriptionDiff: "ArgDescriptionDiff",
    ArgDiff: "ArgDiff",
    EnumDiff: "EnumDiff"
};

module.exports = {
    GraphQLDiff: GraphQLDiff,
    DiffType: DiffType
};
