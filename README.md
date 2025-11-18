
 1. What are some differences between interfaces and types in TypeScript?

 TypeScript-এ ডেটার কাঠামো ঠিক করার জন্য interface আর type (Type Alias) দুটোই ব্যবহার করা হয়, তবে তাদের মধ্যে কিছু জরুরি পার্থক্য রয়েছে।

১. ডিক্লারেশন মার্জিং (Declaration Merging)
এই দুটো টাইপের মধ্যে প্রধান পার্থক্য হলো ডিক্লারেশন মার্জিং। Interface-এর ক্ষেত্রে আপনি একই নামে একাধিক ইন্টারফেস তৈরি করতে পারেন, আর TypeScript সেগুলোকে নিজে থেকেই জুড়ে দেয়। এটা লাইব্রেরি এক্সটেনশনের জন্য খুব উপযোগী।

TypeScript

interface User { id: number; }
interface User { name: string; }
const myUser: User = { id: 10, name: "Rahim" };
কিন্তু Type Alias এই ক্ষমতা সমর্থন করে না। একই নামে দুটো Type Alias তৈরি করলে কম্পাইল-টাইমে ভুল দেখাবে।

TypeScript

type ID = number;
২. টাইপের বহুমাত্রিক ব্যবহার (Versatility)
Type Alias হলো Interface-এর চেয়ে বেশি বহুমুখী। Interface শুধুমাত্র অবজেক্টের কাঠামো সংজ্ঞায়িত করতে পারে। অন্যদিকে, Type Alias অবজেক্ট ছাড়াও অন্য সব ধরনের জটিল টাইপ তৈরি করতে পারে।

ইউনিয়ন এবং ইন্টারসেকশন: শুধুমাত্র Type Alias ব্যবহার করেই ইউনিয়ন (|) এবং ইন্টারসেকশন (&) টাইপ তৈরি করা যায়।

TypeScript

**Union Type: হয় string, না হয় number
type StringOrNumber = string | number;

** Intersection Type: দুটো অবজেক্টের বৈশিষ্ট্য একত্রিত করা
interface Student { roll: number; }
interface Teacher { subject: string; }
type FacultyMember = Student & Teacher;
প্রিমিটিভ টাইপ: Type Alias দিয়ে যেকোনো প্রিমিটিভ টাইপের জন্য নতুন নাম দেওয়া যায়, যা Interface পারে না।

2.What is the use of the keyof keyword in TypeScript? Provide an example?

Answer :

TypeScript-এ keyof কীওয়ার্ডটি ব্যবহৃত হয় কোনো অবজেক্ট টাইপ বা ইন্টারফেস এর সমস্ত প্রোপার্টি নেমের ইউনিয়ন টাইপ (Union Type) তৈরি করার জন্য। সহজভাবে বললে, keyof T আপনাকে T টাইপের মধ্যে থাকা চাবি বা 'key'গুলোর একটি তালিকা (যেমন: "নাম" | "বয়স" | "শহর") দেয়।

এর প্রধান ব্যবহার হলো টাইপ নিরাপত্তা (Type Safety) নিশ্চিত করা, বিশেষ করে যখন আপনি রান-টাইমে কোনো অবজেক্টের প্রোপার্টি অ্যাক্সেস করতে চান। এটি কম্পাইলারকে নিশ্চিত করে যে আপনি শুধুমাত্র বিদ্যমান প্রোপার্টিগুলোকেই অ্যাক্সেস করার চেষ্টা করছেন।

উদাহরণ
ধরুন আপনার কাছে একটি User ইন্টারফেস আছে। আপনি এমন একটি ফাংশন লিখতে চান যা এই ইউজার অবজেক্ট থেকে যেকোনো একটি প্রোপার্টির মান (value) তুলে আনবে।

TypeScript

interface User {
  name: string;
  age: number;
  city: string;
}

==>> keyof User হলো "name" | "age" | "city"
type UserKeys = keyof User; 


 * ইউজার অবজেক্ট থেকে নির্দিষ্ট প্রোপার্টির মান তুলে আনে।
   param obj - User টাইপের অবজেক্ট।
   param key - অবশ্যই User-এর বিদ্যমান প্রোপার্টি নেম হতে হবে।

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { name: "Akas", age: 30, city: "Dhaka" };


const userName = getProperty(user, "name");  ==>> টাইপ হবে string
const userAge = getProperty(user, "age");   ==>>>> টাইপ হবে number

// getProperty(user, "country"); // এটি ভুল দেখাবে, কারণ "country" User-এর key নয়।
