// ============================================
// COMPLETED PROJECTS DATA TEMPLATE
// ============================================
//
// This file shows the structure for adding projects to your Completed Projects page.
// Copy this template and add it to the projects array in CompletedProjectsPage.jsx
//
// Budget Format: Use Lakhs notation (1 Lakh = 100,000 MMK)
// Examples:
//   - 5,000,000 MMK = 50 Lakhs
//   - 25,000,000 MMK = 250 Lakhs
//   - 100,000,000 MMK = 1,000 Lakhs
//   - 500,000,000 MMK = 5,000 Lakhs

// ============================================
// TEMPLATE 1: Residential Project
// ============================================
{
  id: 'project-001',                           // Unique identifier (use project-001, project-002, etc.)
  name: 'Master Bedroom Elegance',             // Project name
  location: 'Yangon',                          // City/Region in Myanmar
  category: 'residential',                     // Category: 'residential' | 'commercial' | 'retail'
  budgetMin: 50,                               // Minimum budget in Lakhs
  budgetMax: 250,                              // Maximum budget in Lakhs
  thumbnail: '/projects/master-bedroom-thumb.jpg',  // Path to thumbnail image
  description: 'Featuring sage green walls with dusty rose accents and premium wood finishes. A perfect blend of timeless design and modern comfort.',
  photos: [                                    // Array of project photos for gallery
    '/projects/master-bedroom-01.jpg',
    '/projects/master-bedroom-02.jpg',
    '/projects/master-bedroom-03.jpg',
    '/projects/master-bedroom-04.jpg'
  ],
  story: 'This master bedroom project transformed a dated space into a luxurious sanctuary. We selected a sophisticated color palette of sage green and dusty rose, complemented by warm wood tones. Custom cabinetry provides ample storage while maintaining the elegant aesthetic. The result is a serene retreat that perfectly balances functionality with timeless beauty.'
}

// ============================================
// TEMPLATE 2: Commercial Project
// ============================================
{
  id: 'project-002',
  name: 'Modern Office Redesign',
  location: 'Mandalay',
  category: 'commercial',
  budgetMin: 500,                              // 50,000,000 MMK
  budgetMax: 1500,                             // 150,000,000 MMK
  thumbnail: '/projects/office-redesign-thumb.jpg',
  description: 'Contemporary office space with open-plan layout, collaborative zones, and executive areas. Designed to enhance productivity and employee well-being.',
  photos: [
    '/projects/office-redesign-01.jpg',
    '/projects/office-redesign-02.jpg',
    '/projects/office-redesign-03.jpg'
  ],
  story: 'Our team redesigned this corporate office to create a modern, inspiring work environment. We implemented an open-plan layout with dedicated collaboration spaces, private meeting rooms, and a comfortable executive area. The design incorporates natural materials, abundant natural light, and ergonomic furniture to promote employee wellness and productivity.'
}

// ============================================
// TEMPLATE 3: Retail Project
// ============================================
{
  id: 'project-003',
  name: 'Boutique Shop Transformation',
  location: 'Kalaw',
  category: 'retail',
  budgetMin: 200,                              // 20,000,000 MMK
  budgetMax: 800,                              // 80,000,000 MMK
  thumbnail: '/projects/boutique-thumb.jpg',
  description: 'Elegant retail space with custom display areas, warm lighting, and inviting customer experience. Perfect for showcasing premium products.',
  photos: [
    '/projects/boutique-01.jpg',
    '/projects/boutique-02.jpg',
    '/projects/boutique-03.jpg',
    '/projects/boutique-04.jpg',
    '/projects/boutique-05.jpg'
  ],
  story: 'This boutique shop required a complete transformation to reflect the brand\'s premium positioning. We designed custom display areas with integrated lighting, created an inviting entrance, and implemented a sophisticated color scheme. The layout guides customers through the space naturally, encouraging exploration while maintaining an exclusive atmosphere.'
}

// ============================================
// TEMPLATE 4: Luxury Residential Project
// ============================================
{
  id: 'project-004',
  name: 'Luxury Villa Renovation',
  location: 'Yangon',
  category: 'residential',
  budgetMin: 2000,                             // 200,000,000 MMK
  budgetMax: 5000,                             // 500,000,000 MMK
  thumbnail: '/projects/villa-thumb.jpg',
  description: 'High-end villa renovation featuring premium materials, bespoke furnishings, and sophisticated design throughout. A masterpiece of luxury living.',
  photos: [
    '/projects/villa-01.jpg',
    '/projects/villa-02.jpg',
    '/projects/villa-03.jpg',
    '/projects/villa-04.jpg',
    '/projects/villa-05.jpg',
    '/projects/villa-06.jpg'
  ],
  story: 'This luxury villa renovation was a comprehensive project that transformed every space into a showcase of sophisticated design. We sourced premium materials from around the world, commissioned custom furniture pieces, and implemented state-of-the-art lighting and climate control systems. The result is a stunning residence that perfectly balances elegance, comfort, and functionality.'
}

// ============================================
// HOW TO USE THIS TEMPLATE
// ============================================
//
// 1. Copy the template that matches your project type
// 2. Fill in all the details for your project
// 3. Save project images to /public/projects/ folder
// 4. Update the image paths to match your filenames
// 5. Add the completed object to the projects array in CompletedProjectsPage.jsx
//
// Example:
// const projects = [
//   { id: 'project-001', name: '...', ... },  // Your first project
//   { id: 'project-002', name: '...', ... },  // Your second project
//   // Add more projects here
// ]
//
// ============================================
// IMPORTANT NOTES
// ============================================
//
// • ID: Must be unique for each project (use project-001, project-002, etc.)
// • Location: Use city/region names (e.g., Yangon, Mandalay, Kalaw, Naypyidaw)
// • Category: Must be one of: 'residential', 'commercial', 'retail'
// • Budget: Use Lakhs notation (1 Lakh = 100,000 MMK)
// • Thumbnail: Should be 1200x800px or similar aspect ratio
// • Photos: Can have multiple photos for the gallery (recommended: 4-6 photos)
// • Story: Write 2-3 sentences describing the project and design approach
//
// ============================================
// BUDGET CONVERSION REFERENCE
// ============================================
//
// 1 Lakh = 100,000 MMK
//
// Common Budget Ranges:
// 5,000,000 MMK = 50 Lakhs
// 10,000,000 MMK = 100 Lakhs
// 25,000,000 MMK = 250 Lakhs
// 50,000,000 MMK = 500 Lakhs
// 100,000,000 MMK = 1,000 Lakhs
// 250,000,000 MMK = 2,500 Lakhs
// 500,000,000 MMK = 5,000 Lakhs
// 1,000,000,000 MMK = 10,000 Lakhs
//
// ============================================
