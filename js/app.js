// Sample movie data
const movies = [
    {
        id: 1,
        title: "Trường Nguyệt Tẫn Minh",
        year: 2023,
        genre: ["Cổ trang", "Tình cảm", "Tiên hiệp"],
        director: "Lưu Ninh",
        actors: ["La Vân Hi", "Bạch Lộc", "Đặng Vi", "Tôn Trân Ni"],
        description: "Câu chuyện tình yêu đầy bi thương giữa nữ thần và ma tộc, với những ân oán tiền kiếp và hi sinh vì đại nghĩa.",
        poster: "image/Trường Nguyệt Tẫn Minh.jpg"
    },
    {
        id: 2,
        title: "Trường Tương Tư",
        year: 2023,
        genre: ["Cổ trang", "Tình cảm", "Tiên hiệp"],
        director: "Tần Trân",
        actors: ["Dương Tử", "Trương Vãi Nghệ", "Đặng Vi", "Đàn Kiến Mông"],
        description: "Hành trình tìm kiếm tình yêu và sự thật về thân phận của Tiểu Yêu trong thế giới tiên giới đầy rẫy âm mưu.",
        poster: "image/Trường Tương Tư.jpg"
    },
    {
        id: 3,
        title: "Nhập Thanh Vân",
        year: 2022,
        genre: ["Cổ trang", "Võ hiệp", "Tình cảm"],
        director: "Chu Duệ Bân",
        actors: ["Lý Dịch Phong", "Trần Ngọc Kỳ", "Vương Tử Duy", "Hà Nhuận Đông"],
        description: "Cuộc đời thăng trầm của Thiếu niên anh hùng Trương Tiểu Phàm từ một tiểu đồng môn trở thành đại hiệp lừng danh.",
        poster: "image/Nhập Thanh Vân.jpg"
    },
    {
        id: 4,
        title: "Kiệu Hoa Hỉ Sự",
        year: 2023,
        genre: ["Cổ trang", "Hài hước", "Tình cảm"],
        director: "Tất Trạch Dã",
        actors: ["Lưu Linh", "Tất Văn Quân", "Cốc Bảo Sâm", "Trương Nhất Đồng"],
        description: "Mối tình oan gia ngõ hẹp giữa tiểu thư nhà giàu và công tử nhà quan, đầy ắp tình huống dở khóc dở cười.",
        poster: "image/Kiệu Hoa Hỉ Sự.jpg"
    },
    {
        id: 5,
        title: "Thiên Đóa Đào Hoa Nhất Thế Khai",
        year: 2021,
        genre: ["Cổ trang", "Tiên hiệp", "Tình cảm"],
        director: "Châu Viễn Trường",
        actors: ["Viên Băng Nghiên", "Trương Triết Hạn", "Mễ Nhiệt", "Đới Tư Vũ"],
        description: "Mối tình ba đời ba kiếp giữa Hoa Yêu và Thượng Thần, với những hiểu lầm và hi sinh vượt qua số phận.",
        poster: "image/Thiên Đóa Đào Hoa Nhất Thế Khai.jpg"
    },
    {
        id: 6,
        title: "Hồ Yêu Tiểu Hồng Nương",
        year: 2021,
        genre: ["Cổ trang", "Tiên hiệp", "Tình cảm"],
        director: "Lý Mộc Ca",
        actors: ["Từ Lộ", "Trương Nhã Khiêm", "Vương An Vũ", "Lý Đông Húc"],
        description: "Câu chuyện về tiểu hồ ly Tiểu Hồng Nương và mối tình ngang trái với thư sinh Vương Tử Tiêu trong bối cảnh yêu giới - nhân giới.",
        poster: "image/Hồ Yêu Tiểu Hồng Nương.jpg"
    },
    {
        id: 7,
        title: "Tiên Kiếm Kỳ Hiệp 4",
        year: 2016,
        genre: ["Cổ trang", "Tiên hiệp", "Võ hiệp"],
        director: "Lương Thắng Quyền",
        actors: ["Hàn Đông Quân", "Cổ Lực Na Trát", "Trịnh Nghiệp Thành", "Tiểu Thái"],
        description: "Phần tiếp theo của series Tiên Kiếm Kỳ Hiệp, kể về cuộc phiêu lưu của Vân Phi Tuyết và những người bạn trong thế giới tiên kiếm.",
        poster: "image/Tiên Kiếm Kỳ Hiệp 4.jpg"
    },
    {
        id: 8,
        title: "Bạch Nguyệt Phạn Tinh",
        year: 2023,
        genre: ["Cổ trang", "Tình cảm", "Tiên hiệp"],
        director: "Chu Duệ Bân",
        actors: ["Trương Tịnh Nghi", "Đường Hiểu Thiên", "Ngô Cương", "Lưu Vũ Ninh"],
        description: "Mối tình đầy trắc trở giữa nữ chính có thân phận đặc biệt và nam chính lạnh lùng nhưng chung tình trong bối cảnh tiên hiệp đầy mưu đồ.",
        poster: "image/Bạch Nguyệt Phạn Tinh.jpg"
    }
];

// DOM Elements
const moviesContainer = document.getElementById('movies-container');
const genreFiltersContainer = document.getElementById('genre-filters');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const movieModal = document.getElementById('movie-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// State
let selectedGenres = [];
let searchQuery = '';

// Initialize the app
function init() {
    renderMovies(movies);
    setupGenreFilters();
    setupEventListeners();
    checkThemePreference();
}

// Render movies to the DOM
function renderMovies(moviesToRender) {
    moviesContainer.innerHTML = '';
    
    if (moviesToRender.length === 0) {
        moviesContainer.innerHTML = '<p class="no-results">Không tìm thấy phim phù hợp.</p>';
        return;
    }
    
    moviesToRender.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
            </div>
        `;
        movieCard.addEventListener('click', () => openMovieModal(movie));
        moviesContainer.appendChild(movieCard);
    });
}

// Setup genre filters
function setupGenreFilters() {
    // Get all unique genres
    const allGenres = [];
    movies.forEach(movie => {
        movie.genre.forEach(genre => {
            if (!allGenres.includes(genre)) {
                allGenres.push(genre);
            }
        });
    });
    
    // Sort genres alphabetically
    allGenres.sort();
    
    // Create checkboxes for each genre
    allGenres.forEach(genre => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = genre;
        checkbox.addEventListener('change', handleGenreFilter);
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(genre));
        
        genreFiltersContainer.appendChild(label);
    });
}

// Handle genre filter changes
function handleGenreFilter(e) {
    const genre = e.target.value;
    
    if (e.target.checked) {
        selectedGenres.push(genre);
    } else {
        selectedGenres = selectedGenres.filter(g => g !== genre);
    }
    
    filterMovies();
}

// Handle search input with debounce
let debounceTimer;
function handleSearch() {
    searchQuery = searchInput.value.toLowerCase();
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterMovies, 300);
}

// Filter movies based on selected genres and search query
function filterMovies() {
    let filteredMovies = movies;
    
    // Filter by genre if any genres are selected
    if (selectedGenres.length > 0) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.genre.some(genre => selectedGenres.includes(genre))
        );
    }
    
    // Filter by search query if there is one
    if (searchQuery) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery)
        );
    }
    
    renderMovies(filteredMovies);
}

// Open movie modal with details
function openMovieModal(movie) {
    modalBody.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="modal-poster">
        <div class="modal-details">
            <h2 class="modal-title">${movie.title} (${movie.year})</h2>
            <div class="modal-meta">
                <span><strong>Đạo diễn:</strong> ${movie.director}</span>
                <span><strong>Thể loại:</strong> ${movie.genre.join(', ')}</span>
            </div>
            <p class="modal-description">${movie.description}</p>
            <div class="modal-cast">
                <p><strong>Diễn viên:</strong> ${movie.actors.join(', ')}</p>
            </div>
        </div>
    `;
    movieModal.style.display = 'block';
}

// Close movie modal
function closeMovieModal() {
    movieModal.style.display = 'none';
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    themeLabel.textContent = isDarkMode ? 'Chế độ sáng' : 'Chế độ tối';
}

// Check for saved theme preference
function checkThemePreference() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        themeLabel.textContent = 'Chế độ sáng';
    }
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    themeToggle.addEventListener('change', toggleTheme);
    closeBtn.addEventListener('click', closeMovieModal);
    window.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            closeMovieModal();
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);