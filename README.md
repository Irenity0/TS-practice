## Blog 1: Using union and intersection types in TypeScript.
### Union Types (`|`)

Union types allow a variable to hold more than one possible type.
Syntax: `type1 | type2`

Example:
```typescript
let value: string | number;
value = "Afra"; // valid
value = 42;     // also valid
````

You can also use unions in function parameters:

```typescript
function printId(id: string | number) {
  console.log(id);
}
```

> Think of unions like "either this OR that."

### Intersection Types (`&`)

Intersection types combine multiple types into one, meaning the value must satisfy all types.
Syntax: `type1 & type2`
Example:

```typescript
type Person = { name: string };
type Employee = { employeeId: number };

let worker: Person & Employee = {
  name: "Afra",
  employeeId: 1234
};
```

You can also use intersections in function parameters:

```typescript
function display(worker: Person & Employee) {
  console.log(worker.name, worker.employeeId);
}
```

> Think of intersections like "this AND that together."

### Summary

|Concept|Meaning|Syntax Example|
|---|---|---|
|Union|One type OR another|`string|
|Intersection|Must have properties from both types|`Person & Employee`|

------------------

What is the Use of the keyof Keyword in TypeScript?
The keyof keyword in TypeScript is used to get a union of all property names (keys) of a type.

It lets you work with keys in a type-safe way.

Example:

```typescript
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys is "name" | "age"
```

Now PersonKeys can only be "name" or "age" — nothing else.

You can use it like this:

```typescript
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // "Alice"
```

### Why is it useful?
- Ensures type safety when accessing object properties.
- Avoids mistakes like using keys that don’t exist.
- Helps build reusable and generic functions.
