module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/sahil/fertigo_web/app/api/api.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "IMAGE_BASE_URL",
    ()=>IMAGE_BASE_URL,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT,
    "SERVICES",
    ()=>SERVICES
]);
const BASE_URL = 'http://85.31.234.205:5200';
const IMAGE_BASE_URL = 'http://85.31.234.205:5200';
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const SERVICES = '/service';
}),
"[project]/sahil/fertigo_web/app/api/ApiHelper/serviceHelper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetServices",
    ()=>GetServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/api.tsx [app-ssr] (ecmascript)");
;
;
const GetServices = ({ page = 1, limit = 100 } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"],
        method: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GET"],
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"]}?page=${page}&limit=${limit}`
    });
}),
"[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProviderScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$serviceHelper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/ApiHelper/serviceHelper.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SERVICES = [
    {
        id: 'ivf-medications',
        label: 'IVF Medications'
    },
    {
        id: 'fertility-supplements',
        label: 'Fertility Supplements'
    },
    {
        id: 'hormone-injections',
        label: 'Hormone Injections'
    },
    {
        id: 'prescription-services',
        label: 'Prescription Services'
    }
];
const TREATMENT_TYPES = [
    {
        id: 'ivf',
        label: 'IVF (In Vitro Fertilization)'
    },
    {
        id: 'iui',
        label: 'IUI (Intrauterine Insemination)'
    },
    {
        id: 'egg-freezing',
        label: 'Egg Freezing'
    },
    {
        id: 'embryo-transfer',
        label: 'Embryo Transfer'
    },
    {
        id: 'fertility-testing',
        label: 'Fertility Testing'
    },
    {
        id: 'genetic-testing',
        label: 'Genetic Testing'
    }
];
const SERVICE_CATEGORIES = [
    {
        id: 'blood-test-labs',
        label: 'Blood Test Laboratories',
        icon: '🧪'
    },
    {
        id: 'ultrasound-clinics',
        label: 'Ultrasound Clinics',
        icon: '📡'
    },
    {
        id: 'injection-nurses',
        label: 'Injection Nurses / Home Nurses',
        icon: '💉'
    },
    {
        id: 'fertility-clinics',
        label: 'Fertility Clinics (IVF)',
        icon: '🏥'
    },
    {
        id: 'ivf-clinics',
        label: 'IVF Clinics',
        icon: '🧬'
    },
    {
        id: 'diagnostic-centers',
        label: 'Diagnostic & Imaging Centers',
        icon: '⚕️'
    },
    {
        id: 'home-sample',
        label: 'Home Sample Collection',
        icon: '🏠'
    },
    {
        id: 'wellness-support',
        label: 'Wellness Support Services',
        icon: '✨'
    }
];
const URGENCY_TYPES = [
    {
        id: 'scheduled',
        label: 'Scheduled',
        color: 'blue'
    },
    {
        id: 'same-day',
        label: 'Same Day',
        color: 'orange'
    },
    {
        id: 'emergency',
        label: 'Emergency',
        color: 'red'
    }
];
const DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
function AddProviderScreen({ onBack, provider }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        // Basic Info
        name: provider?.name || '',
        email: provider?.email || '',
        phone: provider?.phone || '',
        website: '',
        password: '',
        confirmPassword: '',
        // Company Info
        serviceType: '',
        treatmentTypes: [],
        treatmentSupport: false,
        urgencySupport: false,
        description: '',
        treatmentPrices: {},
        treatmentType: '',
        // Services with prices
        selectedServices: [],
        servicePrices: {},
        selectedCategories: [],
        // Location
        address: provider?.address || '',
        city: '',
        country: '',
        postalCode: '',
        mapLocation: {
            lat: null,
            lng: null
        },
        // Service Details
        urgencyOptions: [],
        languagesSupported: '',
        areas: '',
        // Business Hours
        businessHours: DAYS.reduce((acc, day)=>({
                ...acc,
                [day]: {
                    enabled: true,
                    startTime: '09:00',
                    endTime: '17:00'
                }
            }), {}),
        verified: provider?.verified || false
    });
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoPreview, setLogoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoUrl, setLogoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingLogo, setUploadingLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchServices = async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$serviceHelper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetServices"])();
                console.log(res.data.data);
                if (res.data?.status) {
                    setServices(res.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch services', error);
            }
        };
        fetchServices();
    }, []);
    const handleInputChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
    };
    const toggleService = (serviceId)=>{
        // Only allow adding services, not removing them
        if (!formData.selectedServices.includes(serviceId)) {
            handleInputChange('selectedServices', [
                ...formData.selectedServices,
                serviceId
            ]);
        }
    };
    const removeService = (serviceId)=>{
        const updated = formData.selectedServices.filter((id)=>id !== serviceId);
        handleInputChange('selectedServices', updated);
        // Remove price when service is removed
        const updatedPrices = {
            ...formData.servicePrices
        };
        delete updatedPrices[serviceId];
        handleInputChange('servicePrices', updatedPrices);
    };
    const updateServicePrice = (serviceId, price)=>{
        handleInputChange('servicePrices', {
            ...formData.servicePrices,
            [serviceId]: price
        });
    };
    const toggleTreatmentType = (treatmentId)=>{
        const updated = formData.treatmentTypes.includes(treatmentId) ? formData.treatmentTypes.filter((id)=>id !== treatmentId) : [
            ...formData.treatmentTypes,
            treatmentId
        ];
        handleInputChange('treatmentTypes', updated);
    };
    const toggleCategory = (categoryId)=>{
        const updated = formData.selectedCategories.includes(categoryId) ? formData.selectedCategories.filter((id)=>id !== categoryId) : [
            ...formData.selectedCategories,
            categoryId
        ];
        handleInputChange('selectedCategories', updated);
    };
    const toggleUrgency = (urgencyId)=>{
        const updated = formData.urgencyOptions.includes(urgencyId) ? formData.urgencyOptions.filter((id)=>id !== urgencyId) : [
            ...formData.urgencyOptions,
            urgencyId
        ];
        handleInputChange('urgencyOptions', updated);
    };
    const toggleDay = (day)=>{
        handleInputChange('businessHours', {
            ...formData.businessHours,
            [day]: {
                ...formData.businessHours[day],
                enabled: !formData.businessHours[day].enabled
            }
        });
    };
    const updateDayTime = (day, field, value)=>{
        handleInputChange('businessHours', {
            ...formData.businessHours,
            [day]: {
                ...formData.businessHours[day],
                [field]: value
            }
        });
    };
    const handleLogoUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }
        setLogoFile(file);
        setLogoPreview(URL.createObjectURL(file));
        try {
            setUploadingLogo(true);
            const res = await UploadProviderLogo(file);
            // assuming API returns: { status: true, data: { url: "https://..." } }
            if (res.data?.status) {
                setLogoUrl(res.data.data.url);
            }
        } catch (error) {
            console.error('Logo upload failed', error);
            alert('Failed to upload logo');
        } finally{
            setUploadingLogo(false);
        }
    };
    const buildProviderPayload = ()=>{
        // 1️⃣ services with prices
        const serviceType = Object.entries(formData.treatmentPrices).map(([serviceId, price])=>({
                serviceId,
                price: Number(price)
            }));
        // 2️⃣ treatment support
        let treatmentSupport = [];
        if (formData.treatmentSupport) {
            if (formData.treatmentType === 'both') {
                treatmentSupport = [
                    'IVF',
                    'IUI'
                ];
            } else if (formData.treatmentType === 'ivf') {
                treatmentSupport = [
                    'IVF'
                ];
            } else if (formData.treatmentType === 'iui') {
                treatmentSupport = [
                    'IUI'
                ];
            }
        }
        // 3️⃣ urgency support
        const urgencySupport = formData.urgencySupport ? formData.urgencyOptions.map((u)=>u === 'same-day' ? 'Same Day' : u === 'next-day' ? 'Next Day' : u === 'emergency' ? 'Emergency' : 'Scheduled') : [];
        // 4️⃣ operating hours
        const operatingHours = Object.entries(formData.businessHours).map(([day, value])=>({
                day: day.toLowerCase(),
                isAvailable: value.enabled,
                slots: value.enabled ? [
                    {
                        startTime: value.startTime,
                        endTime: value.endTime
                    }
                ] : []
            }));
        return {
            name: formData.name,
            email: formData.email,
            countryCode: '+91',
            mobileNumber: Number(formData.phone),
            webSiteUrl: formData.website,
            providerDescription: formData.description,
            providerLogo: logoUrl,
            isActive: true,
            providerVerificationStatus: false,
            serviceType,
            treatmentSupport,
            urgencySupport,
            languageSupport: formData.languagesSupported.split(',').map((l)=>l.trim()),
            operatingHours,
            address: {
                fullAddress: formData.address,
                city: formData.city,
                country: formData.country,
                postalCode: formData.postalCode
            },
            location: {
                lat: formData.mapLocation.lat,
                lng: formData.mapLocation.lng
            },
            isVerified: formData.verified
        };
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const payload = buildProviderPayload();
        console.log('Form submitted:', payload);
        onBack?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onBack,
                            className: "w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: provider ? 'Edit Provider' : 'Add New Provider'
                                }, void 0, false, {
                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-1",
                                    children: provider ? 'Update provider information' : 'Fill in the details to add a new service provider'
                                }, void 0, false, {
                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "text-gray-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Basic Information"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Provider Name ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            required: true,
                                                                            value: formData.name,
                                                                            onChange: (e)=>handleInputChange('name', e.target.value),
                                                                            placeholder: "Enter provider name",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 368,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Email Address ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 381,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            required: true,
                                                                            value: formData.email,
                                                                            onChange: (e)=>handleInputChange('email', e.target.value),
                                                                            placeholder: "contact@provider.com",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Phone Number ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            required: true,
                                                                            value: formData.phone,
                                                                            onChange: (e)=>handleInputChange('phone', e.target.value),
                                                                            placeholder: "+1 (555) 123-4567",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: "Website URL"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "url",
                                                                            value: formData.website,
                                                                            onChange: (e)=>handleInputChange('website', e.target.value),
                                                                            placeholder: "https://www.provider.com",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Service Type & Features"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-3",
                                                                children: "Services Types Supported"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                                children: services.map((treatment)=>{
                                                                    const isSelected = formData.treatmentTypes.includes(treatment._id);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `p-3 rounded-xl border-2 transition-all ${isSelected ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: isSelected,
                                                                                        onChange: ()=>toggleTreatmentType(treatment._id),
                                                                                        className: "w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 518,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-medium text-gray-900",
                                                                                        children: treatment.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 524,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 517,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "number",
                                                                                    placeholder: `Enter ${treatment.name} price`,
                                                                                    value: formData.treatmentPrices[treatment._id] || '',
                                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                                ...prev,
                                                                                                treatmentPrices: {
                                                                                                    ...prev.treatmentPrices,
                                                                                                    [treatment._id]: e.target.value
                                                                                                }
                                                                                            })),
                                                                                    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 532,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 531,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, treatment._id, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 509,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 504,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-bold text-gray-900",
                                                                                        children: "Treatment Support"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 560,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-600 mt-1",
                                                                                        children: "Provide IVF/IUI treatment"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 561,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 559,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.treatmentSupport,
                                                                                        onChange: (e)=>handleInputChange('treatmentSupport', e.target.checked),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 564,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 570,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 571,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 563,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.treatmentSupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-4",
                                                                            children: [
                                                                                {
                                                                                    id: 'ivf',
                                                                                    label: 'IVF'
                                                                                },
                                                                                {
                                                                                    id: 'iui',
                                                                                    label: 'IUI'
                                                                                },
                                                                                {
                                                                                    id: 'both',
                                                                                    label: 'Both'
                                                                                }
                                                                            ].map((treatment)=>{
                                                                                const isSelected = formData.treatmentType === treatment.id;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: `px-8 py-3 rounded-full cursor-pointer transition-all font-bold text-sm border-2 ${isSelected ? 'bg-white text-pink-600 border-pink-500 shadow-md' : 'bg-white text-pink-400 border-transparent hover:border-pink-300'}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: isSelected,
                                                                                            onChange: ()=>handleInputChange('treatmentType', treatment.id),
                                                                                            className: "hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                            lineNumber: 593,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        treatment.label
                                                                                    ]
                                                                                }, treatment.id, true, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 586,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 577,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-bold text-gray-900",
                                                                                        children: "Urgency Support"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 613,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-600 mt-1",
                                                                                        children: "Urgent delivery available"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 614,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 612,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.urgencySupport,
                                                                                        onChange: (e)=>handleInputChange('urgencySupport', e.target.checked),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 617,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 623,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 624,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 616,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 611,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.urgencySupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-4",
                                                                            children: [
                                                                                {
                                                                                    id: 'same-day',
                                                                                    label: 'Same Day'
                                                                                },
                                                                                {
                                                                                    id: 'next-day',
                                                                                    label: 'Next Day'
                                                                                },
                                                                                {
                                                                                    id: 'emergency',
                                                                                    label: 'Emergency'
                                                                                },
                                                                                {
                                                                                    id: 'scheduled',
                                                                                    label: 'Scheduled'
                                                                                }
                                                                            ].map((urgency)=>{
                                                                                const isSelected = formData.urgencyOptions.includes(urgency.id);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>toggleUrgency(urgency.id),
                                                                                    className: `px-8 py-3 rounded-full font-bold text-sm transition-all border-2 ${isSelected ? 'bg-white text-pink-600 border-pink-500 shadow-md' : 'bg-white text-pink-400 border-transparent hover:border-pink-300'}`,
                                                                                    children: urgency.label
                                                                                }, urgency.id, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 639,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                                children: [
                                                                    "Description ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pink-600",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 661,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                value: formData.description,
                                                                onChange: (e)=>handleInputChange('description', e.target.value),
                                                                placeholder: "Provide a detailed description of the services offered...",
                                                                rows: 4,
                                                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Location Details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                                children: [
                                                                    "Full Address ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pink-600",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 784,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 783,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                value: formData.address,
                                                                onChange: (e)=>handleInputChange('address', e.target.value),
                                                                placeholder: "123 Medical Plaza, Suite 100",
                                                                rows: 2,
                                                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 786,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "City ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 799,
                                                                                columnNumber: 30
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 798,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: formData.city,
                                                                        onChange: (e)=>handleInputChange('city', e.target.value),
                                                                        placeholder: "City",
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Country ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 813,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 812,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        required: true,
                                                                        value: formData.country,
                                                                        onChange: (e)=>handleInputChange('country', e.target.value),
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 821,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "us",
                                                                                children: "United States"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 822,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "uk",
                                                                                children: "United Kingdom"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 823,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "ca",
                                                                                children: "Canada"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 824,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "au",
                                                                                children: "Australia"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 825,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 815,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Postal Code ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 831,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 830,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: formData.postalCode,
                                                                        onChange: (e)=>handleInputChange('postalCode', e.target.value),
                                                                        placeholder: "12345",
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 833,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Map Pin Location ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 845,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-pink-300 bg-pink-50 hover:bg-pink-100 transition-all font-bold text-pink-600",
                                                                        onClick: ()=>{
                                                                            // placeholder for map logic
                                                                            console.log('Pin my location clicked');
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 856,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Pin My Location"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 848,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-2 text-center",
                                                                        children: "Use map to select the exact business location"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Languages Supported ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 891,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 890,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    required: true,
                                                                    value: formData.languagesSupported,
                                                                    onChange: (e)=>handleInputChange('languagesSupported', e.target.value),
                                                                    placeholder: "e.g., English, Spanish, French",
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 889,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 781,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 769,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 928,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Business Hours"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 927,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 926,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: DAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-3 cursor-pointer flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.businessHours[day].enabled,
                                                                                        onChange: ()=>toggleDay(day),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 939,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 945,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 946,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 938,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-gray-900",
                                                                                children: day
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 948,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 937,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 936,
                                                                    columnNumber: 25
                                                                }, this),
                                                                formData.businessHours[day].enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-3 pl-14",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                                                    children: "Start"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 955,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "time",
                                                                                    value: formData.businessHours[day].startTime,
                                                                                    onChange: (e)=>updateDayTime(day, 'startTime', e.target.value),
                                                                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 956,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 954,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                                                    children: "End"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 964,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "time",
                                                                                    value: formData.businessHours[day].endTime,
                                                                                    onChange: (e)=>updateDayTime(day, 'endTime', e.target.value),
                                                                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 965,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 963,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 953,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, day, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 933,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-900 mb-4",
                                                children: "Provider Logo"
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 989,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-32 h-32 rounded-2xl shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center",
                                                        children: logoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: logoPreview,
                                                            alt: "Provider Logo",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 993,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full bg-gradient-to-br from-[#EC4899] to-[#EC4899] flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                className: "w-16 h-16 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1000,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 991,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "w-full cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleLogoUpload,
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1005,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all font-semibold text-gray-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1013,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    logoPreview ? 'Change Logo' : 'Upload Logo'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-center text-gray-500",
                                                        children: [
                                                            "PNG, JPG or SVG",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1018,
                                                                columnNumber: 36
                                                            }, this),
                                                            "Recommended 500x500px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 990,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-6 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-gray-900 mb-3",
                                                        children: "Verification Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-3 cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: formData.verified,
                                                                        onChange: (e)=>handleInputChange('verified', e.target.checked),
                                                                        className: "sr-only peer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1026,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1032,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1033,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1025,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "w-5 h-5 text-green-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1037,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-bold text-gray-900",
                                                                                children: "Verified Provider"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1038,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1036,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-600 mt-1",
                                                                        children: "Display verification badge on profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1040,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-6 border-t border-gray-200 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#EC4899] text-white font-bold hover:from-[#f02287] hover:to-[#f02287] transition-all shadow-lg hover:shadow-xl",
                                                        children: provider ? 'Update Provider' : 'Add Provider'
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onBack,
                                                        className: "w-full py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1054,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 984,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-gray-900 mb-3 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-4 h-4 text-pink-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1072,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Form Progress"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Basic Info"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1077,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.name && formData.email && formData.phone ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.name && formData.email && formData.phone ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1078,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1076,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Service Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1083,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.serviceType ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.serviceType ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1084,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1082,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.selectedServices.length > 0 ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.selectedServices.length > 0 ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1090,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1088,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1095,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.address && formData.city ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.address && formData.city ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1096,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1094,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Business Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1101,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1102,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1075,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 982,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
            lineNumber: 323,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5428e1bf._.js.map