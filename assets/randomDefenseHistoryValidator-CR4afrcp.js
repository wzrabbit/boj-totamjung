import{s as i}from"./index-CElCL35T.js";import{i as s,c as o}from"./typeGuards-DuDHAUw0.js";const n=e=>s(e)&&"problemId"in e&&"title"in e&&"tier"in e&&"createdAt"in e&&typeof e.problemId=="number"&&typeof e.title=="string"&&typeof e.tier=="number"&&e.tier in i&&o(e.createdAt),c=e=>Array.isArray(e)&&e.every(r=>n(r));export{c as a,n as i};
