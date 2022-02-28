"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6120],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"useSelect",title:"useSelect",description:"useSelect hook API references of @pankod/refine-core"},d=void 0,s={unversionedId:"core/hooks/useSelect",id:"core/hooks/useSelect",isDocsHomePage:!1,title:"useSelect",description:"useSelect hook API references of @pankod/refine-core",source:"@site/docs/core/hooks/useSelect.md",sourceDirName:"core/hooks",slug:"/core/hooks/useSelect",permalink:"/docs/core/hooks/useSelect",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/useSelect.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1646061793,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"useSelect",title:"useSelect",description:"useSelect hook API references of @pankod/refine-core"},sidebar:"someSidebar",previous:{title:"useTable",permalink:"/docs/core/hooks/useTable"},next:{title:"useTitle",permalink:"/docs/core/hooks/refine/useTitle"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[{value:"<code>resource</code>",id:"resource",children:[],level:3},{value:"<code>defaultValue</code>",id:"defaultvalue",children:[],level:3},{value:"<code>optionLabel</code> and <code>optionValue</code>",id:"optionlabel-and-optionvalue",children:[],level:3},{value:"<code>filters</code>",id:"filters",children:[],level:3},{value:"<code>sort</code>",id:"sort",children:[],level:3},{value:"<code>fetchSize</code>",id:"fetchsize",children:[],level:3},{value:"<code>onSearch</code>",id:"onsearch",children:[],level:3},{value:"<code>queryOptions</code>",id:"queryoptions",children:[],level:3},{value:"<code>defaultValueQueryOptions</code>",id:"defaultvaluequeryoptions",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useSelect")," hook allows you to manage any ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," (like a ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3schools.com/tags/tag_select.asp"},"Html ",(0,l.kt)("inlineCode",{parentName:"a"},"<select>")," tag"),", ",(0,l.kt)("a",{parentName:"p",href:"https://react-select.com/home"},"React Select"),", etc...) component. Since it is designed as headless, It expects you to handle the UI."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"We'll demonstrate how to get data at ",(0,l.kt)("inlineCode",{parentName:"p"},"/categories")," endpoint from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev")," REST API."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Unbranded",\n        },\n    ];\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'// highlight-next-line\nimport { useSelect } from "@pankod/refine-core";\n\nexport const DummyList = () => {\n// highlight-start\n    const { options } = useSelect<ICategory>({\n        resource: "categories",\n    });\n// highlight-end\n\n    return (\n        <select>\n            // highlight-start\n            {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                    {category.label}\n                </option>\n            ))}\n            // highlight-end\n        </select>\n    );\n};\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useSelect")," uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"useList")," hook for fetching data. ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useList"},"Refer to ",(0,l.kt)("inlineCode",{parentName:"a"},"useList")," hook for details. ","\u2192")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"resource"},(0,l.kt)("inlineCode",{parentName:"h3"},"resource")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n});\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"resource")," property determines API resource endpoint to fetch records from ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,l.kt)("inlineCode",{parentName:"a"},"dataProvider")),". It returns properly configured ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," values for select options."),(0,l.kt)("h3",{id:"defaultvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-next-line\n    defaultValue: "1",\n});\n')),(0,l.kt)("p",null,"Adds extra ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"<select>")," component. It uses ",(0,l.kt)("inlineCode",{parentName:"p"},"useMany")," so ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue")," can be an array of strings like follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'defaultValue: ["1", "2"],\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useMany"},"Refer to the ",(0,l.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for detailed usage. ","\u2192")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Can use ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue")," property when edit a record in ",(0,l.kt)("inlineCode",{parentName:"p"},"Edit")," page."))),(0,l.kt)("h3",{id:"optionlabel-and-optionvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"optionLabel")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"optionValue")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    optionLabel: "title",\n    optionValue: "id",\n// highlight-end\n});\n')),(0,l.kt)("p",null,"Allows you to change the values and appearance of your options. Default values are ",(0,l.kt)("inlineCode",{parentName:"p"},'optionLabel = "title"')," and ",(0,l.kt)("inlineCode",{parentName:"p"},'optionValue = "id"'),"."),(0,l.kt)("h3",{id:"filters"},(0,l.kt)("inlineCode",{parentName:"h3"},"filters")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    filters: [\n        {\n            field: "isActive",\n            operator: "eq",\n            value: true,\n        },\n    ],\n// highlight-end\n});\n')),(0,l.kt)("p",null,"It allows us to add some filters while fetching the data. For example, if you want to list only the active records."),(0,l.kt)("h3",{id:"sort"},(0,l.kt)("inlineCode",{parentName:"h3"},"sort")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    sort: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n// highlight-end\n});\n')),(0,l.kt)("p",null,"It allows us to sort the ",(0,l.kt)("inlineCode",{parentName:"p"},"options"),". For example, if you want to sort your list according to ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," by ascending."),(0,l.kt)("h3",{id:"fetchsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"fetchSize")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-next-line\n    fetchSize: 20,\n});\n')),(0,l.kt)("p",null,"Amount of records to fetch in select box."),(0,l.kt)("h3",{id:"onsearch"},(0,l.kt)("inlineCode",{parentName:"h3"},"onSearch")),(0,l.kt)("p",null,"It allows us to ",(0,l.kt)("inlineCode",{parentName:"p"},"AutoComplete")," the ",(0,l.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    onSearch: (value) => [\n        {\n            field: "title",\n            operator: "containss",\n            value,\n        },\n    ],\n// highlight-end\n});\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The HTML select tag does not natively support AutoComplete. If AutoComplete is desired, it can be used with ",(0,l.kt)("a",{parentName:"p",href:"https://react-select.com/async"},"React Select")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/use-select"},"use-select"),"."))),(0,l.kt)("p",null,"If defined, it allows us to override the filters to use when fetching list of records. Thus, it . It should return ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/interfaceReferences#crudfilters"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudFilters")),"."),(0,l.kt)("h3",{id:"queryoptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    queryOptions: {\n        onError: () => {\n            console.log("triggers when on query return Error");\n        },\n    },\n// highlight-end\n});\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options can be set by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,l.kt)("h3",{id:"defaultvaluequeryoptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"defaultValueQueryOptions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options } = useSelect({\n    resource: "categories",\n// highlight-start\n    defaultValueQueryOptions: {\n        onSuccess: (data) => {\n            console.log("triggers when on query return on success");\n        },\n    },\n// highlight-end\n});\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options for default value query can be set by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource ",(0,l.kt)("div",{className:"required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds extra ",(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseKey")),"  ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseKey[]"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optionValue"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the option's value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"id"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"optionLabel"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the option's label value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"title"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters"),(0,l.kt)("td",{parentName:"tr",align:null},"Add filters while fetching the data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow us to sort the options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debounce"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to delay"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"react-query ",(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<GetListResponse<TData>, TError>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValueQueryOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"react-query ",(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<GetManyResponse<TData>, TError>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetchSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of records to fetch in select box list."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"If defined, this callback allows us to override all filters for every search request."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: string) => CrudFilters "),"|",(0,l.kt)("inlineCode",{parentName:"td"}," Promise<CrudFilters>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metaData"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,l.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,l.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,l.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,l.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,l.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,l.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,l.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey[]; [key: string]: any; }"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"return-values"},"Return values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"It returns possible options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ label: string; value: string }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,l.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValueQueryResult"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of the query of a ",(0,l.kt)("inlineCode",{parentName:"td"},"defaultValue")," record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,l.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValueQueryOnSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"Default value onSuccess method"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,l.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,l.kt)("iframe",{src:"https://codesandbox.io/embed/refine-core-use-select-18cdm?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-select-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);