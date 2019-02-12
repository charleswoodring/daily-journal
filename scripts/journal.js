/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

// object with properties.  each property has a key and a value
// journalEntry is object. key (date) and value (01/08/19) make up property (date: "01/08/19",)
const journalEntry = {
    date: "01/08/19",
    concepts: "objects",
    journalEntry: "learning objects, properties, keys and values",
    mood: "happy"
}
const journalEntry2 = {
    date: "01/09/19",
    concepts: "API",
    journalEntry: "learned external API",
    mood: "confused"
}
const journalEntry3 = {
    date: "01/10/19",
    concepts: "class assignment",
    journalEntry: "Welcome to Nashville Group",
    mood: "confused"
}

// array to hold the object
const journalEntries = []


// push objects into the array
journalEntries.push (journalEntry)
journalEntries.push (journalEntry2)
journalEntries.push (journalEntry3)
console.log(journalEntries)