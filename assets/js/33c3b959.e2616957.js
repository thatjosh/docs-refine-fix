"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1560],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var A=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,A,r=function(e,t){if(null==e)return{};var n,A,r={},a=Object.keys(e);for(A=0;A<a.length;A++)n=a[A],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)n=a[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=A.createContext({}),l=function(e){var t=A.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return A.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},s=A.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,m=s["".concat(d,".").concat(u)]||s[u]||p[u]||a;return n?A.createElement(m,o(o({ref:t},c),{},{components:n})):A.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return A.createElement.apply(null,o)}return A.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36525:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var A=n(87462),r=n(63366),a=(n(67294),n(3905)),o=n(81396),i=["components"],d={id:"refresh-button",title:"Refresh"},l=void 0,c={unversionedId:"ui-frameworks/antd/components/buttons/refresh-button",id:"ui-frameworks/antd/components/buttons/refresh-button",isDocsHomePage:!1,title:"Refresh",description:"` uses Ant Design's  component to update the data shown on the page via the useOne method provided by your dataProvider`.",source:"@site/docs/ui-frameworks/antd/components/buttons/refresh.md",sourceDirName:"ui-frameworks/antd/components/buttons",slug:"/ui-frameworks/antd/components/buttons/refresh-button",permalink:"/docs/ui-frameworks/antd/components/buttons/refresh-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/components/buttons/refresh.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1646061793,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"refresh-button",title:"Refresh"},sidebar:"someSidebar",previous:{title:"Clone",permalink:"/docs/ui-frameworks/antd/components/buttons/clone-button"},next:{title:"Save",permalink:"/docs/ui-frameworks/antd/components/buttons/save-button"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>recordItemId</code>",id:"recorditemid",children:[],level:3},{value:"<code>resourceName</code>",id:"resourcename",children:[],level:3},{value:"<code>hideText</code>",id:"hidetext",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,A.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," uses Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," component to update the data shown on the page via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useOne"},(0,a.kt)("inlineCode",{parentName:"a"},"useOne"))," method provided by your ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useShow } from "@pankod/refine-core";\nimport {\n    // highlight-next-line\n    RefreshButton,\n    Show,\n    Typography,\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show\n            isLoading={isLoading}\n            // highlight-next-line\n            pageHeaderProps={{ extra: <RefreshButton /> }}\n        >\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,a.kt)("p",null,"Will Look like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"Default refresh button"})),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"recorditemid"},(0,a.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which data is going to be refreshed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RefreshButton } from "@pankod/refine-antd";\n\nexport const MyRefreshComponent = () => {\n    return <RefreshButton resourceName="posts" recordItemId="1" />;\n};\n')),(0,a.kt)("p",null,"Clicking the button will trigger the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useOne"},(0,a.kt)("inlineCode",{parentName:"a"},"useOne")),' method and then fetches the record whose resource is "post" and whose id is "1".'),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the id information from the route by default."))),(0,a.kt)("h3",{id:"resourcename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resourceName")," allows us to manage which resource is going to be refreshed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RefreshButton } from "@pankod/refine-antd";\n\nexport const MyRefreshComponent = () => {\n    return <RefreshButton resourceName="categories" recordItemId="2" />;\n};\n')),(0,a.kt)("p",null,"Clicking the button will trigger the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useOne"},(0,a.kt)("inlineCode",{parentName:"a"},"useOne")),' method and then fetches the record whose resource is "categories" and whose id is "2".'),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," component reads the resource name from the route by default."))),(0,a.kt)("h3",{id:"hidetext"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,a.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RefreshButton } from "@pankod/refine-antd";\n\nexport const MyRefreshComponent = () => {\n    return <RefreshButton hideText />;\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design button props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/button/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,a.kt)("inlineCode",{parentName:"td"},"{ resourceName?: string; recordItemId?: BaseKey; hideText?: boolean; }")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for refresh"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which id to use for refresh"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,a.kt)("td",{parentName:"tr",align:null},"Record id that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideText"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"Refresh"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"icon"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,a.kt)("inlineCode",{parentName:"a"},"<RedoOutlined />")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onClick"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the handler to handle the click event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(event) => void")),(0,a.kt)("td",{parentName:"tr",align:null},"trigger the ",(0,a.kt)("a",{parentName:"td",href:"/docs/core/hooks/data/useOne"},(0,a.kt)("inlineCode",{parentName:"a"},"useOne"))," method for refresh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metaData"),(0,a.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,a.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,a.kt)("td",{parentName:"tr",align:null},"{}")))))}u.isMDXComponent=!0},81396:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAQAAACkCAYAAAAANPwSAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR42u3dWYwc1b0/cB7+SR6iPET3JQq6L/cBlOUhkBd4CIqIkkhE6F5ElGuhCxEIhSCEA2EPhCUsYSfsxmyBmH1fkrAaHANmCftqs9ksBmJWM2OPje36z7furVa5p3umG4/x9NTnI5Wwu2uquuucQf5965xTm328fLhYObK6WLNmbQEAAABMX6n9kwEkC9hMEAAAAADNkixgM5cBAAAAmkcgAAAAAA0kEAAAAIAGEggAAAA0xJpXFhYjcy4pVhy2XzE842fF8A++UwxvvXkxtOWXi6Et/p9tU26jbZC2KNtktG3SRmmrtJlAAAAAgL6tfevNYuWZpxTD239f0T2gW9oubZi2FAgAAAAwrjVLFhcrDp5ZDH37a4rq6bKNtmXaNG0rEAAAAGB9q1eVd5OHvvtvCujpuo22bdo4bS0QAAAAoFiz+PVi+D+3VzA3ZSrBaFunzQUCAAAADbZ6wfz/XSBwvCLyW18thn/582Jk1lnF6gfmlXPS1w0NuXhTRNoibZK2SRulrdJm44YCW/972fYCAQAAgCaGAXf9rRj67te7F43bblmMzD6nWPv+MhdrwKTN0nZpw+5TCL5e9gGBAAAAQJPCgAXzu4cB5Vzzk4t1IyMu1IBLG6Ytu64NkVCgz5ECAgEAAIABVa4Z0GWawPBPtynWLHzBRZpubf7S82Xbdps+0M+aAgIBAACAQbR6VdcFBId33alY9+ly12iaStsO/89/dV1osNenDwgEAAAABlD5aMFuYcAqUwSmfSgw2sbdQoHykYQCAQAAgOlnzZLFHeeSZyi5kQENCgUyUqDT9IHRvpE+IhAAAACYZlYcPLNzEWjNgMbJmgKdwqH0EYEAAADANJLn1A99+2sdhomf7OI0VPn0gfaAaLSPpK8IBAAAAKZN8Td27YA8o96jBZsrbZ8+0O9aAgIBAACAATK8/dZjCr+R2ed8rmN9+OGHxZIlS4pFixYVCxcutG3iLe2Q9ki79Ct9YExQtP33BQIAAADTwZpXFo4dGv6trxZr31/W13FWr15dFp5Lly4tVqxYUaxbt87FnQLSDmmPtEvaJ+3Uq/SB9IX2/pE+IxAAAAAYcCNzLhl7F/iXP+/7OJ/3LjRfnGr0Rj/SF8aMHhntMwIBAACAAbfi0N+MLfhmndV3oZk70Ex9aad+gpv0hTFPGzhsP4EAAADAoBv+7x3GFHyrH5jX1zFy1znD0pn60k79jBJIXxgzgmTGzwQCAAAAAx8I/OA7Ywq+iR4t1y4L11kzYDCkndJevSofSdkeCIz2GYEAAADAgBva6ptjCr51w8N9HSOr2TM4+mmv9IUxi06O9hmBQI8++eSTclu5cqWLAQAATK1AYMsvjyn4NmaByWAFAmUfaQ8ERvtM4wOB5cuXF08++WRx0003Fffee2/x/PPPd5w3s8UWW5TbnnvuOdDfN4HGM888M2Z77rnnrCYKAACDGgi0F3sCAYHABvSRTRYI3Hfffa1tY0rhv8MOO7QK/fbtj3/8Y/Hee++NCQR23333ge40Tz/9dNfvnG3bbbct9tlnny/8fwZPPfVU8eijjxbPPvus32wAABAI0LRAYL/99is222yzYu+9997oocN4RXG11YvTpgQC9W3u3Llf2OfabrvtynMmpAEAAAY/ELjllluK8847rzjggAPKLX/Oa1PB4sWLiyuuuKK45pprylHjG0NGYOccAoEJrF69uthll13KMOC0007b6OfLsP+q6D3uuOPKu9MZSr9s2bLioYceKn7zm98UO++883o/0y0Q6HcVzrVr127SlTvrgcC+++5bvPTSS+WWKQMJAPKLWg8Fck3G+y79WLNmjUAAAACmeSDw6quvFr/97W+LY489trjzzjuLxx9/vNzy57yW97JPv59tjz32aG2p6XJDedasWcUHH3zQ17Heeeed8hhz5swpzjnnnHFrng3x+uuvl+cRCIzj7bffLn784x+XYcDNN9+80c+X9QHqw+M/++yznorXeiAwb9688r9bbbVVq4i94IILilWrVnU8VpKhP//5z+VQ/PxMtoQOSYuG/2/lzxTXOU4+06GHHjrmGB999FH5XrZ02nYvv/xy6/2HH364p0DghBNO6LhPXq/2uf3228ecJ+ffddddy/d/8pOfFEcddVTx97//fUzQkWuYNp0xY0brWuW/v/jFL8rrlSkZZ599drHjjjuuF0Lk79kybQMAABisQCBFcGqGoaGhsZ9z9LW812+hnJuY+ZmPP/643FJLzJ8/vzjzzDOLvfbaq6+iPuvHnXLKKRu9TQQCE0hx+r3vfa/4xje+8YXNHU+RWhWn2V58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+eST9Yb8578vvvhix0Bg+fLlxS677LLeEwnqTypYtGiRXgQAAIBAYKoFAo888kjHuf4ZJTBjxoxWYX/33Xd3DARi5cqV5SKCO+64Y+v9/Hnu3Ll6EAAAAAKBQZTRAtU0gF4MDw8Xn332mZ4DAACAQAAAAAAYLAIBAAAAaCCBAAAAADSQQAAAAAAaSCAAAAAADSQQAAAAgAYSCAAAAEADCQQAAACggQQCAAAA0EACAQAAAGgggQAAAAA0kEAAAAAAGkggAAAAAA0kEAAAAIAGEggAAABAAwkEAAAAoIEEAgAAANBAAgEAAABoIIEAAAAANJBAYIr48MMPi5tuuqlYs2ZN130WL15cXHHFFcU111xTLF++fNLOvXbt2uLmm28u3n//fQ0xjcydO7dYuHChNgYAAKZfIHDLLbcUp5566rRoiCeeeKLYc889y2Cgk3feeafYY489ijlz5hTnnHNOsWzZskk79yeffFKe+9FHH229luOniGTT+vjjj4uVK1d+rp897rjjir/97W9d23gik9EHPv300/LcAACAQGBS3XDDDcXxxx8/bRpj3bp1Xd/L6IFTTjnlCzn3Z599VoYP7733nt+QTezwww8v7r///g0OBCbqX+0mqw9ceeWVZYAFAAAIBDZqIHDnnXeWxccdd9xRHHrooeUd0cMOO6x44YUXuh4jQ6rPPvvsYu+99y63E088sXjjjTda7z/wwAPFMcccUx7r2GOPLRYsWLDez+cO6AUXXFDst99+5c+feeaZ5TH32Wef1j4ZyZB92h199NHFww8/XP4558zPd5LvkuIsWz7HgQceWN65zZ/bC7ann366OPjgg9d7rf4dcqxcn0w9uO6661r75PO+/vrrxeOPP17uV50r24MPPtjxc/3pT38qr/kll1xSfv+99tqrOOmkk9YbvfDSSy8V+++//5ifzbSHSy+9dL3zZ5RErn+Oc8ABBxS333576/pV7XnEEUcUr7322kZpg0zDuPjii8vj5Fz53PPnz19v/w35nHUTXZd8p6odqrbIde4m/TL9s+rz+dztgUDVxpW33nqrvFZ5febMmeXvzooVK8btA3nvyCOPLL97ttNPP73rCIBO/baSa3PaaaeVx8h++V2uBxbpW+mnabN8tnzGWbNmlUFFPkPabbw2yvXNd0t/SHvOnj27GBoaWm+/xx57rDjhhBPKz5Br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"}}]);