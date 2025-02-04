function generateHeader() {
    const stateLinks = [
        { name: 'Alabama', path: 'alabama' },
        { name: 'Arizona', path: 'arizona' },
        { name: 'Arkansas', path: 'arkansas' },
        { name: 'California', path: 'california' },
        { name: 'Colorado', path: 'colorado' },
        { name: 'Connecticut', path: 'connecticut' },
        { name: 'Delaware', path: 'delaware' },
        { name: 'Florida', path: 'florida' },
        { name: 'Georgia', path: 'georgia' },
        { name: 'Hawaii', path: 'hawaii' },
        { name: 'Idaho', path: 'idaho' },
        { name: 'Illinois', path: 'illinois' },
        { name: 'Indiana', path: 'indiana' },
        { name: 'Iowa', path: 'iowa' },
        { name: 'Kansas', path: 'kansas' },
        { name: 'Kentucky', path: 'kentucky' },
        { name: 'Louisiana', path: 'louisiana' },
        { name: 'Maryland', path: 'maryland' },
        { name: 'Michigan', path: 'michigan' },
        { name: 'Minnesota', path: 'minnesota' },
        { name: 'Mississippi', path: 'mississippi' },
        { name: 'Missouri', path: 'missouri' },
        { name: 'Montana', path: 'montana' },
        { name: 'Nebraska', path: 'nebraska' },
        { name: 'Nevada', path: 'nevada' },
        { name: 'New Jersey', path: 'new-jersey' },
        { name: 'New Mexico', path: 'new-mexico' },
        { name: 'New York', path: 'new-york' },
        { name: 'North Carolina', path: 'north-carolina' },
        { name: 'North Dakota', path: 'north-dakota' },
        { name: 'Ohio', path: 'ohio' },
        { name: 'Oklahoma', path: 'oklahoma' },
        { name: 'Oregon', path: 'oregon' },
        { name: 'Pennsylvania', path: 'pennsylvania' },
        { name: 'South Carolina', path: 'south-carolina' },
        { name: 'South Dakota', path: 'south-dakota' },
        { name: 'Tennessee', path: 'tennessee' },
        { name: 'Texas', path: 'texas' },
        { name: 'Utah', path: 'utah' },
        { name: 'Virginia', path: 'virginia' },
        { name: 'Washington', path: 'washington' },
        { name: 'West Virginia', path: 'west-virginia' },
        { name: 'Wisconsin', path: 'wisconsin' },
        { name: 'Wyoming', path: 'wyoming' }
    ];

    // Determine if we're in a state page or the index
    const isStatePage = window.location.pathname.includes('/states/');
    const basePath = isStatePage ? '../' : './';

    const header = `
        <nav class="bg-white shadow-lg">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <!-- Logo/Home -->
                    <a href="${basePath}index.html" class="flex items-center space-x-2">
                        <span class="text-rl-red font-bold text-xl">Red Lobster</span>
                        <span class="text-gray-600">Happy Hour</span>
                    </a>
                    
                    <!-- Navigation Links -->
                    <div class="hidden md:flex space-x-8">
                        <a href="${basePath}index.html" class="text-gray-700 hover:text-rl-red">Home</a>
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-rl-red flex items-center">
                                State List
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div class="py-2 px-4 space-y-2 max-h-96 overflow-y-auto">
                                    ${stateLinks.map(state => `
                                        <a href="${basePath}states/${state.path}.html" 
                                           class="block text-gray-700 hover:text-rl-red">
                                            ${state.name}
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <a href="https://www.redlobster.com" class="text-gray-700 hover:text-rl-red">Official Site</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="md:hidden text-gray-700 hover:text-rl-red" id="mobile-menu-button">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div class="md:hidden hidden" id="mobile-menu">
                    <div class="py-4 space-y-4">
                        <a href="${basePath}index.html" class="block text-gray-700 hover:text-rl-red">Home</a>
                        <div class="space-y-2">
                            <p class="text-gray-500 font-semibold">State List</p>
                            <div class="pl-4 space-y-2">
                                ${stateLinks.map(state => `
                                    <a href="${basePath}states/${state.path}.html" 
                                       class="block text-gray-700 hover:text-rl-red">
                                        ${state.name}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        <a href="https://www.redlobster.com" class="block text-gray-700 hover:text-rl-red">Official Site</a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    // Add mobile menu toggle functionality
    document.addEventListener('DOMContentLoaded', () => {
        const headerElement = document.createElement('div');
        headerElement.innerHTML = header;
        document.body.insertBefore(headerElement, document.body.firstChild);

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    });
} 