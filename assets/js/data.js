// ============================================================
// Cool Base Hardware – Site Data
// Edit this file to update products, delivery areas, FAQs, etc.
// ============================================================

var CBH = {

  business: {
    name: "Cool Base Hardware",
    tagline: "Everything you need to build. Delivered in Siaya.",
    location: "Siaya town, opposite the Siaya Law Courts",
    phone: "0708 292558",
    whatsapp: "https://wa.me/254708292558",
    email: "coolbasehardware2020@gmail.com", // TODO: switch to business email
    facebook: "https://www.facebook.com/Cool-Base-Hardware",
    mapsEmbed: "https://www.google.com/maps?q=Cool+Base+Hardware+Siaya&output=embed",
    hours: {
      weekdays: { open: "07:30", close: "18:30", label: "Mon – Sat: 7:30 am – 6:30 pm" },
      sunday: { closed: true, label: "Sunday: Closed" },
      note: "// TODO: confirm hours with owner"
    },
    ticker: [
      "Siaya town, opposite Siaya Law Courts",
      "We supply and deliver",
      "Get a quote on WhatsApp in minutes",
      "Bulk and contractor prices available"
    ]
  },

  categories: [
    { id: "building-materials",  label: "Building Materials",  color: "var(--tag-amber)",  icon: "🧱", img: "assets/img/cement.jpg", description: "Cement, iron sheets, timber, reinforcement bars and everything else your construction needs." },
    { id: "plumbing",            label: "Plumbing",            color: "var(--tag-teal)",    icon: "🔧", img: "assets/img/pvc-pipes.jpg", description: "PVC pipes, fittings, taps, water tanks, sinks and sanitary ware." },
    { id: "concrete-aggregates", label: "Concrete Aggregates", color: "var(--tag-orange)",  icon: "⛏️", img: "assets/img/ballast.jpg", description: "Building sand, ballast and hardcore for concrete works." },
    { id: "concrete-blocks",     label: "Concrete Blocks",     color: "var(--tag-indigo)",  icon: "🏗️", img: "assets/img/solid-blocks.jpg", description: "Solid blocks, hollow blocks and paving blocks, made to standard." },
    { id: "deals",               label: "Deals & Bundles",     color: "var(--tag-green)",   icon: "🎁", img: "assets/img/foundation-bundle.jpg", description: "Curated starter lists and bundles for common construction stages." }
  ],

  products: [
    // ════════════════════════════════════════════════════════════
    // 1. BUILDING MATERIALS (11 Items)
    // ════════════════════════════════════════════════════════════
    {
      id: "bm-01",
      name: "Cement (Simba / Bamburi 50 kg)",
      category: "building-materials",
      unit: "bag",
      price: 780,
      inStock: true,
      description: "High-grade 42.5N Ordinary Portland Cement ideal for foundations, structural beams, and plastering.",
      img: "assets/img/cement.jpg",
      specs: { brand: "Simba / Bamburi 42.5N", strength: "42.5 N/mm²", weight: "50 kg bag" }
    },
    {
      id: "bm-02",
      name: "Corrugated Iron Sheets G28 (3m)",
      category: "building-materials",
      unit: "sheet",
      price: 1150,
      inStock: true,
      description: "Heavy Gauge 28 galvanized corrugated roofing iron sheets with superior anti-rust coating.",
      img: "assets/img/iron-sheets.jpg",
      specs: { gauge: "Gauge 28", length: "3.0 Metres (10 ft)", finish: "Galvanized Zinc Coated" }
    },
    {
      id: "bm-03",
      name: "Roofing Nails with Washers (1 kg)",
      category: "building-materials",
      unit: "kg",
      price: 220,
      inStock: true,
      description: "Twisted-shank galvanized roofing nails equipped with leak-proof neoprene rubber washers.",
      img: "assets/img/roofing-nails.jpg",
      specs: { size: "2.5 inch & 3.0 inch", finish: "Electro-galvanized", pack: "1 kg pack" }
    },
    {
      id: "bm-04",
      name: "Annealed Binding Wire 16G (2 kg roll)",
      category: "building-materials",
      unit: "roll",
      price: 380,
      inStock: true,
      description: "Pliable soft-annealed steel tying wire designed for securing structural reinforcement bars.",
      img: "assets/img/binding-wire.jpg",
      specs: { gauge: "16 SWG (1.6 mm)", weight: "2.0 kg roll", material: "Black Annealed Steel" }
    },
    {
      id: "bm-05",
      name: "Sawn Cypress Timber 2x2 (12 ft)",
      category: "building-materials",
      unit: "piece",
      price: 280,
      inStock: true,
      description: "Straight, seasoned 2x2 cypress sawn timber for ceiling brandering and roof trusses.",
      img: "assets/img/timber-2x2.jpg",
      specs: { size: "2x2 inches", length: "12 Feet", wood: "Treated Cypress" }
    },
    {
      id: "bm-06",
      name: "Sawn Cypress Timber 2x4 (12 ft)",
      category: "building-materials",
      unit: "piece",
      price: 560,
      inStock: true,
      description: "Heavy structural 2x4 cypress lumber for roofing rafters, wall plates, and formwork.",
      img: "assets/img/timber-2x4.jpg",
      specs: { size: "2x4 inches", length: "12 Feet", grade: "Structural Grade" }
    },
    {
      id: "bm-07",
      name: "Deformed Steel Rebar Y10 (12m)",
      category: "building-materials",
      unit: "piece",
      price: 920,
      inStock: true,
      description: "High-tensile ribbed deformed steel bar (10mm) for ring beams, columns, and slabs.",
      img: "assets/img/rebar-y10.jpg",
      specs: { diameter: "10 mm (Y10)", length: "12.0 Metres", grade: "Grade 500 TMT" }
    },
    {
      id: "bm-08",
      name: "Deformed Steel Rebar Y12 (12m)",
      category: "building-materials",
      unit: "piece",
      price: 1350,
      inStock: true,
      description: "Heavy structural deformed steel bar (12mm) engineered for load-bearing foundation footings.",
      img: "assets/img/rebar-y12.jpg",
      specs: { diameter: "12 mm (Y12)", length: "12.0 Metres", grade: "Grade 500 TMT" }
    },
    {
      id: "bm-09",
      name: "BRM Welded Steel Wire Mesh A142",
      category: "building-materials",
      unit: "sheet",
      price: 4200,
      inStock: true,
      description: "Fabric welded reinforcement wire mesh sheets to prevent floor slab cracks and structural settling.",
      img: "assets/img/wire-mesh.jpg",
      specs: { size: "2.4m x 4.8m sheet", wireGauge: "6 mm ribbed steel", spacing: "200mm x 200mm" }
    },
    {
      id: "bm-10",
      name: "Wallmaster Exterior Emulsion Paint (20L)",
      category: "building-materials",
      unit: "bucket",
      price: 3800,
      inStock: true,
      description: "Weather-resistant, antifungal brilliant white acrylic exterior paint with high opacity coverage.",
      img: "assets/img/paint.jpg",
      specs: { volume: "20 Litres", coverage: "10-12 m² per litre", finish: "Matt Weatherproof" }
    },
    {
      id: "bm-11",
      name: "Heavy Duty Steel Door Frame (Single 3x7ft)",
      category: "building-materials",
      unit: "piece",
      price: 3200,
      inStock: true,
      description: "Precision-bent 1.5mm mild steel frame with welded hinges and integrated mortise strike plate.",
      img: "assets/img/door-frame.jpg",
      specs: { openingSize: "3 ft x 7 ft", gauge: "16 Gauge (1.5mm)", hinges: "3 Heavy Butt Hinges" }
    },

    // ════════════════════════════════════════════════════════════
    // 2. PLUMBING EQUIPMENT (11 Items)
    // ════════════════════════════════════════════════════════════
    {
      id: "pl-01",
      name: "PVC Pressure Pipe Class C 1/2\" (6m)",
      category: "plumbing",
      unit: "length",
      price: 350,
      inStock: true,
      description: "Class C high pressure uPVC potable water pipe for indoor cold water distribution.",
      img: "assets/img/pvc-pipes.jpg",
      specs: { size: "1/2 inch (20mm)", rating: "Class C (9 Bar)", length: "6 Metres" }
    },
    {
      id: "pl-02",
      name: "PVC Pressure Pipe Class C 1\" (6m)",
      category: "plumbing",
      unit: "length",
      price: 680,
      inStock: true,
      description: "Main supply line pressure pipe for connecting borehole pumps, water meters, and tank feeds.",
      img: "assets/img/pvc-pipe-1inch.jpg",
      specs: { size: "1 inch (32mm)", rating: "Class C (9 Bar)", length: "6 Metres" }
    },
    {
      id: "pl-03",
      name: "PVC Waste & Drainage Pipe 4\" (6m)",
      category: "plumbing",
      unit: "length",
      price: 1450,
      inStock: true,
      description: "Heavy soil and waste drainage pipe (110mm) for septic tank connectivity and toilet waste.",
      img: "assets/img/drainage-pipe.jpg",
      specs: { diameter: "4 inch (110mm)", length: "6 Metres", standard: "BS 4514 Heavy Duty" }
    },
    {
      id: "pl-04",
      name: "Assorted PVC Elbows & Tees (Set of 10)",
      category: "plumbing",
      unit: "set",
      price: 450,
      inStock: true,
      description: "Contractor plumbing fitting pack including 90-degree elbows, equal tees, and end caps.",
      img: "assets/img/fittings.jpg",
      specs: { size: "1/2 inch & 3/4 inch", material: "uPVC Pressure Rated", quantity: "10 Pieces Pack" }
    },
    {
      id: "pl-05",
      name: "Heavy Duty Brass Bib Tap 1/2\"",
      category: "plumbing",
      unit: "piece",
      price: 450,
      inStock: true,
      description: "Solid forged brass outdoor water garden tap with hose connector union and lockable lever.",
      img: "assets/img/brass-tap.jpg",
      specs: { thread: "1/2 inch BSP male", material: "Cast Brass", mechanism: "Full Turn Brass Spindle" }
    },
    {
      id: "pl-06",
      name: "Chrome Single Lever Basin Mixer Tap",
      category: "plumbing",
      unit: "piece",
      price: 2600,
      inStock: true,
      description: "Modern polished chrome ceramic disc mixer faucet with dual hot/cold braided flexible pipes.",
      img: "assets/img/basin-mixer.jpg",
      specs: { finish: "Triple Chrome Plated", cartridge: "35mm Ceramic Disc", included: "2x Braided Flexi Pipes" }
    },
    {
      id: "pl-07",
      name: "Cylindrical Water Storage Tank (1,000L)",
      category: "plumbing",
      unit: "tank",
      price: 11500,
      inStock: true,
      description: "Double-layer food grade UV-stabilised HDPE water reservoir tank with anti-bacterial inner lining.",
      img: "assets/img/water-tank-1000.jpg",
      specs: { capacity: "1,000 Litres", layers: "2 Layer Heavy Duty", warranty: "10 Years Manufacturer" }
    },
    {
      id: "pl-08",
      name: "Heavy Duty Water Storage Tank (2,500L)",
      category: "plumbing",
      unit: "tank",
      price: 24000,
      inStock: true,
      description: "Large capacity homestead water tank suitable for rainwater harvesting and domestic gravity feed.",
      img: "assets/img/water-tank-2500.jpg",
      specs: { capacity: "2,500 Litres", diameter: "1.45m", material: "100% Virgin Food-grade Polymer" }
    },
    {
      id: "pl-09",
      name: "Stainless Steel Double Bowl Kitchen Sink",
      category: "plumbing",
      unit: "piece",
      price: 4800,
      inStock: true,
      description: "Commercial gauge 304 satin finish stainless steel kitchen sink with dual waste strainers.",
      img: "assets/img/sinks.jpg",
      specs: { dimensions: "1200mm x 500mm", material: "Grade 304 Stainless Steel", bowls: "Double Bowl with Drainer" }
    },
    {
      id: "pl-10",
      name: "Close-Coupled Ceramic Toilet Suite",
      category: "plumbing",
      unit: "set",
      price: 8500,
      inStock: true,
      description: "Vitreous china WC suite with water-saving dual flush cistern (3L/6L) and soft-close seat cover.",
      img: "assets/img/toilets.jpg",
      specs: { material: "Vitreous China Gloss", flushSystem: "Dual 3/6 Litres", trap: "P-Trap / S-Trap Convertible" }
    },
    {
      id: "pl-11",
      name: "Ceramic Vanity Wash Hand Basin",
      category: "plumbing",
      unit: "piece",
      price: 4200,
      inStock: true,
      description: "Wall-hung white glazed ceramic bathroom hand wash basin with overflow and center tap hole.",
      img: "assets/img/wash-basin.jpg",
      specs: { width: "550 mm", material: "Glazed Ceramic", mount: "Pedestal / Wall Bracket" }
    },

    // ════════════════════════════════════════════════════════════
    // 3. CONCRETE AGGREGATES (10 Items)
    // ════════════════════════════════════════════════════════════
    {
      id: "ca-01",
      name: "Clean Washed River Sand (7 Ton Tipper)",
      category: "concrete-aggregates",
      unit: "tipper",
      price: 14000,
      inStock: true,
      description: "Naturally washed, silt-free river sand delivered by full 7-ton tipper lorry to your site.",
      img: "assets/img/sand-tipper.jpg",
      specs: { volume: "7 Ton Tipper Lorry", type: "River Bed Coarse", use: "Plaster, Mortar & Casting" }
    },
    {
      id: "ca-02",
      name: "Building River Sand for Mortar (1 Ton)",
      category: "concrete-aggregates",
      unit: "ton",
      price: 2200,
      inStock: true,
      description: "Premium washed builder's sand for smooth wall rendering, plastering, and bricklaying.",
      img: "assets/img/sand.jpg",
      specs: { weight: "1 Ton (~0.7 m³)", purity: "Clean Washed (No Silt)", delivery: "Site Delivery Available" }
    },
    {
      id: "ca-03",
      name: "Crushed Blue Ballast 20mm (7 Ton Tipper)",
      category: "concrete-aggregates",
      unit: "tipper",
      price: 16500,
      inStock: true,
      description: "Machine-crushed hard blue quarry stone aggregate (20mm / 3/4\") for high strength structural concrete.",
      img: "assets/img/ballast-tipper.jpg",
      specs: { volume: "7 Ton Tipper", gradeSize: "20 mm (3/4\")", stoneType: "Hard Blue Basalt" }
    },
    {
      id: "ca-04",
      name: "Crushed Stone Ballast 20mm (1 Ton)",
      category: "concrete-aggregates",
      unit: "ton",
      price: 2500,
      inStock: true,
      description: "Standard 20mm aggregate for on-site concrete mixing, foundations, lintels, and columns.",
      img: "assets/img/ballast.jpg",
      specs: { size: "20 mm Clean", weight: "1 Ton", compressiveStrength: "Heavy Load Resistant" }
    },
    {
      id: "ca-05",
      name: "Quarry Hardcore Sub-Base Filling (7 Ton)",
      category: "concrete-aggregates",
      unit: "tipper",
      price: 11000,
      inStock: true,
      description: "Heavy fractured quarry rock for ground stabilization, road bases, and under-slab filling.",
      img: "assets/img/hardcore-tipper.jpg",
      specs: { delivery: "7 Ton Lorry Load", stoneSize: "75 mm – 150 mm", source: "Local Siaya Quarries" }
    },
    {
      id: "ca-06",
      name: "Foundation Hardcore Boulders (1 Ton)",
      category: "concrete-aggregates",
      unit: "ton",
      price: 1800,
      inStock: true,
      description: "Dense, unyielding rock boulders for foundation trench leveling and floor sub-base packing.",
      img: "assets/img/hardcore.jpg",
      specs: { size: "100 mm – 200 mm", weight: "1 Ton", compaction: "Excellent Settlement Resistance" }
    },
    {
      id: "ca-07",
      name: "Quarry Stone Dust / M-Sand (7 Ton Tipper)",
      category: "concrete-aggregates",
      unit: "tipper",
      price: 13500,
      inStock: true,
      description: "Finely crushed stone dust for interlocking paving block beddings and high-density concrete mixes.",
      img: "assets/img/stone-dust.jpg",
      specs: { volume: "7 Ton Tipper", size: "0 – 4 mm Fine Dust", use: "Cabro Laying & Block Screed" }
    },
    {
      id: "ca-08",
      name: "Graded Murram Subgrade Filling (7 Ton)",
      category: "concrete-aggregates",
      unit: "tipper",
      price: 9500,
      inStock: true,
      description: "Natural laterite murram soil for driveway compaction, site leveling, and parking compounds.",
      img: "assets/img/murram.jpg",
      specs: { volume: "7 Ton Tipper", material: "Natural Compactable Murram", use: "Driveways & Site Access" }
    },
    {
      id: "ca-09",
      name: "Pea Gravel 10mm Fine Ballast (1 Ton)",
      category: "concrete-aggregates",
      unit: "ton",
      price: 2600,
      inStock: true,
      description: "Smooth 10mm (3/8\") gravel for terrazzo floors, precast lintels, drainage beds, and pipe packing.",
      img: "assets/img/pea-gravel.jpg",
      specs: { size: "10 mm (3/8\")", weight: "1 Ton", finish: "Rounded / Screened" }
    },
    {
      id: "ca-10",
      name: "River Bed Boulders for Gabions (1 Ton)",
      category: "concrete-aggregates",
      unit: "ton",
      price: 2000,
      inStock: true,
      description: "Hand-picked natural river stones for retaining walls, soil erosion gabion baskets, and boundary decor.",
      img: "assets/img/river-boulders.jpg",
      specs: { size: "150 mm – 300 mm", weight: "1 Ton", type: "Natural River Rock" }
    },

    // ════════════════════════════════════════════════════════════
    // 4. CONCRETE BLOCKS (10 Items)
    // ════════════════════════════════════════════════════════════
    {
      id: "cb-01",
      name: "Machine-Cut Solid Concrete Block 9x9x18\"",
      category: "concrete-blocks",
      unit: "block",
      price: 95,
      inStock: true,
      description: "High-density vibrated concrete block engineered for structural load-bearing perimeter and ground walls.",
      img: "assets/img/solid-blocks.jpg",
      specs: { dimensions: "9\" x 9\" x 18\" (225x225x450mm)", type: "Solid Machine Vibrated", strength: "7.0 N/mm²" }
    },
    {
      id: "cb-02",
      name: "Machine-Cut Solid Concrete Block 6x9x18\"",
      category: "concrete-blocks",
      unit: "block",
      price: 80,
      inStock: true,
      description: "Slim 6-inch solid masonry block for boundary walls, foundation step-downs, and commercial partitions.",
      img: "assets/img/solid-blocks-6inch.jpg",
      specs: { dimensions: "6\" x 9\" x 18\" (150x225x450mm)", type: "Solid Concrete", strength: "7.0 N/mm²" }
    },
    {
      id: "cb-03",
      name: "Standard Hollow Concrete Block 9x9x18\"",
      category: "concrete-blocks",
      unit: "block",
      price: 85,
      inStock: true,
      description: "Double-core hollow masonry block designed for rapid wall erection, reduced dead weight, and insulation.",
      img: "assets/img/hollow-blocks.jpg",
      specs: { dimensions: "9\" x 9\" x 18\" (225x225x450mm)", voids: "2 Hollow Cells", weight: "18 kg approx" }
    },
    {
      id: "cb-04",
      name: "Partition Hollow Concrete Block 6x9x18\"",
      category: "concrete-blocks",
      unit: "block",
      price: 72,
      inStock: true,
      description: "Lightweight 6-inch hollow block for internal room divisions, non-load-bearing partitions, and boundary screens.",
      img: "assets/img/hollow-blocks-6inch.jpg",
      specs: { dimensions: "6\" x 9\" x 18\" (150x225x450mm)", type: "Internal Partition", weight: "14 kg approx" }
    },
    {
      id: "cb-05",
      name: "Interlocking Paving Blocks Cabro 60mm",
      category: "concrete-blocks",
      unit: "m²",
      price: 950,
      inStock: true,
      description: "High-compressive interlocking concrete pavers (Trihex / Coloured) for residential driveways and footpaths.",
      img: "assets/img/paving-blocks.jpg",
      specs: { thickness: "60 mm", trafficRating: "Light / Medium Vehicular", colors: "Grey, Red, Charcoal" }
    },
    {
      id: "cb-06",
      name: "Heavy Duty Paving Blocks Cabro 80mm",
      category: "concrete-blocks",
      unit: "m²",
      price: 1200,
      inStock: true,
      description: "Industrial 80mm heavy-duty pavers engineered for fuel stations, lorry parking bays, and commercial complexes.",
      img: "assets/img/cabro-80mm.jpg",
      specs: { thickness: "80 mm", trafficRating: "Heavy Commercial Lorry", strength: "45 N/mm²" }
    },
    {
      id: "cb-07",
      name: "Precast Concrete Road Kerbs (per meter)",
      category: "concrete-blocks",
      unit: "piece",
      price: 650,
      inStock: true,
      description: "Steel-formed precast edge restraining kerb stones for road verges, driveways, and landscaping boundaries.",
      img: "assets/img/road-kerbs.jpg",
      specs: { length: "1.0 Metre", dimensions: "125mm x 250mm x 1000mm", finish: "Smooth Fair-faced" }
    },
    {
      id: "cb-08",
      name: "Precast Concrete Drainage Channels",
      category: "concrete-blocks",
      unit: "piece",
      price: 580,
      inStock: true,
      description: "U-shaped heavy concrete open drainage gutter for storm water channeling and compound runoff.",
      img: "assets/img/drainage-channel.jpg",
      specs: { length: "1.0 Metre", width: "200 mm inner invert", profile: "U-channel Hydraulic" }
    },
    {
      id: "cb-09",
      name: "Precast Concrete Wall Coping Caps",
      category: "concrete-blocks",
      unit: "piece",
      price: 420,
      inStock: true,
      description: "Double-sloped weathering coping stone to protect perimeter walls from rain intrusion and staining.",
      img: "assets/img/wall-coping.jpg",
      specs: { width: "300 mm (fits 9\" wall)", length: "600 mm", dripGroove: "Integrated Drip Edge" }
    },
    {
      id: "cb-10",
      name: "Decorative Breeze / Ventilation Blocks",
      category: "concrete-blocks",
      unit: "piece",
      price: 150,
      inStock: true,
      description: "Architectural patterned breeze blocks providing continuous natural airflow and decorative sunlight screens.",
      img: "assets/img/breeze-blocks.jpg",
      specs: { size: "200mm x 200mm x 100mm", pattern: "Geometric Cross / Flower", material: "High Finish Precast" }
    },

    // ════════════════════════════════════════════════════════════
    // 5. DEALS & BUNDLES (10 Items)
    // ════════════════════════════════════════════════════════════
    {
      id: "dl-01",
      name: "Foundation Starter Package",
      category: "deals",
      unit: "bundle",
      price: 68000,
      inStock: true,
      description: "Complete trench foundation package: 30 bags cement, 7 tons ballast, 7 tons sand, 15 pcs Y12 rebar & binding wire.",
      img: "assets/img/foundation-bundle.jpg",
      specs: { savings: "Save ~8% vs retail", includes: "Cement (30), Ballast (7T), Sand (7T), Rebar (15), Wire (2 rolls)", delivery: "Site Delivery Included in Siaya" }
    },
    {
      id: "dl-02",
      name: "Wall Masonry Starter Bundle",
      category: "deals",
      unit: "bundle",
      price: 185000,
      inStock: true,
      description: "Bulk walling kit: 2,000 Machine-cut solid 9\" blocks, 40 bags cement, 14 tons river sand, and hoop iron rolls.",
      img: "assets/img/masonry-bundle.jpg",
      specs: { blocksCount: "2,000 Solid Blocks", cement: "40 Bags 42.5N", sand: "2x 7 Ton Tippers", reinforcement: "4x Hoop Iron Rolls" }
    },
    {
      id: "dl-03",
      name: "3-Bedroom Plumbing Rough-in Kit",
      category: "deals",
      unit: "kit",
      price: 42000,
      inStock: true,
      description: "Full supply for hot/cold water distribution & drainage: PVC pipes, waste pipes, elbows, solvent cement, valves, and tape.",
      img: "assets/img/plumbing-kit.jpg",
      specs: { suits: "Standard 3-Bedroom Bungalow", pipesCount: "24 Lengths (Supply & Drainage)", fittings: "Over 80 Assorted Fittings" }
    },
    {
      id: "dl-04",
      name: "Complete Iron Sheet Roofing Pack",
      category: "deals",
      unit: "pack",
      price: 64500,
      inStock: true,
      description: "Roofing set: 50 pcs G28 corrugated iron sheets (3m), 20 kg roofing nails, 6 ridge caps, and valley gutter flashing.",
      img: "assets/img/roofing-pack.jpg",
      specs: { sheets: "50x 3.0m Sheets", nails: "20 kg Galvanized", ridges: "6x 2.4m Ridge Caps", coverage: "Approx 120 m²" }
    },
    {
      id: "dl-05",
      name: "Suspended Slab Concrete Casting Combo",
      category: "deals",
      unit: "combo",
      price: 95000,
      inStock: true,
      description: "Heavy structural casting combo: 50 bags cement, 14 tons blue ballast, 7 tons coarse sand, and 4 sheets A142 BRC mesh.",
      img: "assets/img/slab-combo.jpg",
      specs: { cement: "50 Bags", aggregates: "21 Tons Total", mesh: "4x BRM A142 Sheets", use: "Slab & Columns" }
    },
    {
      id: "dl-06",
      name: "Master Bathroom Complete Sanitary Set",
      category: "deals",
      unit: "set",
      price: 18500,
      inStock: true,
      description: "Premium bathroom package: Ceramic dual flush toilet suite, pedestal basin, chrome mixer tap, and shower rose set.",
      img: "assets/img/bathroom-kit.jpg",
      specs: { toilet: "Dual Flush Close Coupled", basin: "Pedestal Wash Basin", tap: "Chrome Basin Mixer", shower: "Overhead Shower Arm & Rose" }
    },
    {
      id: "dl-07",
      name: "Clean Plastering Sand & Cement Combo",
      category: "deals",
      unit: "combo",
      price: 36000,
      inStock: true,
      description: "Wall rendering package: 25 bags cement, 14 tons ultra-clean washed fine river sand for 12mm smooth skim finish.",
      img: "assets/img/plaster-combo.jpg",
      specs: { sand: "14 Tons Clean River Sand", cement: "25 Bags Plastering Cement", areaCoverage: "Approx 220 m² wall surface" }
    },
    {
      id: "dl-08",
      name: "Rainwater Harvesting 1000L Complete System",
      category: "deals",
      unit: "system",
      price: 16800,
      inStock: true,
      description: "Complete water collection kit: 1,000L cylindrical tank, 4x PVC gutters, downpipes, running outlets, and brass bib tap.",
      img: "assets/img/rainwater-kit.jpg",
      specs: { tank: "1,000L UV Treated", gutters: "4x 3m PVC Gutters", fittings: "Outlets, Brackets & Downpipes", tap: "1/2\" Brass Tap Included" }
    },
    {
      id: "dl-09",
      name: "Perimeter Security Fencing Bundle",
      category: "deals",
      unit: "bundle",
      price: 54000,
      inStock: true,
      description: "Land demarcation kit: 40 precast concrete fencing posts, 2 rolls galvanized chainlink wire (18m x 2m), and binding wire.",
      img: "assets/img/fencing-bundle.jpg",
      specs: { posts: "40x 8ft Concrete Posts", chainlink: "2x 18m Heavy Gauge Rolls", wire: "5 kg Tying Wire", coverage: "Approx 100m Perimeter" }
    },
    {
      id: "dl-10",
      name: "Whole House Painting Starter Set",
      category: "deals",
      unit: "set",
      price: 19500,
      inStock: true,
      description: "Complete painter's starter: 3x 20L interior emulsion, 1x 20L undercoat primer, 4x 9\" rollers, and painter's tape assortment.",
      img: "assets/img/painting-set.jpg",
      specs: { paint: "60L Emulsion + 20L Primer", tools: "4 Rollers + Trays + 4 Brushes", tape: "5x Masking Tape Rolls" }
    }
  ],

  deliveryAreas: [
    { area: "Siaya Town",  fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Ugunja",      fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Bondo",       fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Ugenya",      fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Yala",        fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Usenge",      fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Sega",        fee: null, note: "Ask", minOrder: "Ask" },
    { area: "Other areas", fee: null, note: "Contact us", minOrder: "Ask" }
    // TODO: fill delivery fees once confirmed with owner
  ],

  faqs: [
    { q: "Do you deliver?",                         a: "Yes. We supply and deliver to Siaya town and surrounding areas including Ugunja, Bondo, Ugenya, Yala, Usenge and Sega. Contact us on WhatsApp to confirm delivery to your location and get a delivery fee." },
    { q: "How do I get a quote?",                   a: "The easiest way is to add items to your quote list right here on the website and send it to us on WhatsApp with one tap. You can also call us on 0708 292558 or walk into the shop opposite the Siaya Law Courts." },
    { q: "Do you give bulk or contractor prices?",  a: "Yes. We have special pricing for contractors and bulk buyers. Send us your materials list on WhatsApp or visit the shop to discuss." },
    { q: "How can I pay?",                          a: "We accept M-Pesa and cash. // TODO: confirm payment methods with owner." },
    { q: "Can I collect from the shop?",            a: "Absolutely. You are welcome to pick up your order from our shop in Siaya town, opposite the Siaya Law Courts, Monday to Saturday, 7:30 am to 6:30 pm." },
    { q: "Do you supply blocks and aggregates?",    a: "Yes. We stock solid blocks, hollow blocks, paving blocks, building sand, ballast and hardcore. For large quantities we may need a few days to prepare your order." },
    { q: "How long does delivery take?",            a: "For items in stock in Siaya town, same-day or next-day delivery is often possible. We will confirm a delivery time when you send your quote request." },
    { q: "Can I send my materials list?",           a: "Yes. Take a photo of your materials list (BOQ) or type it out and send it to us on WhatsApp at 0708 292558. We will go through it and send you a quote." },
    { q: "Are your prices fixed?",                  a: "Prices vary with market conditions and quantity. Send your list on WhatsApp and we will give you a current, accurate quote." },
    { q: "Where are you located?",                  a: "We are in Siaya town, opposite the Siaya Law Courts. You can find us on the map on our Contact page." }
  ],

  testimonials: [
    { name: "James O.",  role: "Contractor, Siaya",    text: "Got a quote in under ten minutes and materials were delivered to site the next morning. Highly recommend.",       sample: true },
    { name: "Mary A.",   role: "Home builder, Ugunja", text: "Fair prices, honest advice and they even helped me calculate how many blocks I needed. Great service.",           sample: true },
    { name: "Peter K.",  role: "Landlord, Bondo",      text: "I send my list on WhatsApp and they handle everything – sourcing, pricing and delivery. Saves me so much time.",   sample: true }
    // NOTE: These are sample testimonials. Replace with real customer reviews.
  ],

  howItWorks: [
    { step: 1, title: "Browse & Add to Quote", description: "Browse products on the website. Add what you need to your quote list with one click." },
    { step: 2, title: "Send on WhatsApp",      description: "Review your quote list and send it to us on WhatsApp in one tap. No account needed." },
    { step: 3, title: "We Confirm & Deliver",  description: "We confirm prices, delivery fee and timeline. Pay on delivery or pick up from the shop." }
  ],

  whyChooseUs: [
    { icon: "🏪", title: "Full Range in One Place",    description: "From cement and blocks to pipes and taps – everything for your build under one roof." },
    { icon: "💰", title: "Bulk & Contractor Pricing",  description: "Special rates for contractors and bulk orders. Send your list and we will work something out." },
    { icon: "🚚", title: "Delivery to Your Site",      description: "We deliver to Siaya and surrounding areas. Tell us your location and we quote delivery." },
    { icon: "⚡", title: "Quote in Minutes",           description: "Send your materials list on WhatsApp and get a reply fast – no waiting for days." }
  ]
};

// Expose globally on window for all browser environments
if (typeof window !== 'undefined') {
  window.CBH = CBH;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CBH;
}
