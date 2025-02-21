const HIRAGANA = {
    あ:['a'],
    い:['i','yi'],
    う:['u','wu','whu'],
    え:['e'],
    お:['o'],
    か:['ka','ca'],
    き:['ki'],
    く:['ku','cu','qu'],
    け:['ke'],
    こ:['ko','co'],
    さ:['sa'],
    し:['si','ci','shi'],
    す:['su'],
    せ:['se'],
    そ:['so'],
    た:['ta'],
    ち:['ti','chi'],
    つ:['tu','tsu'],
    て:['te'],
    と:['to'],
    な:['na'],
    に:['ni'],
    ぬ:['nu'],
    ね:['ne'],
    の:['no'],
    は:['ha'],
    ひ:['hi'],
    ふ:['hu','fu'],
    へ:['he'],
    ほ:['ho'],
    ま:['ma'],
    み:['mi'],
    む:['mu'],
    め:['me'],
    も:['mo'],
    や:['ya'],
    ゆ:['yu'],
    よ:['yo'],
    ら:['ra'],
    り:['ri'],
    る:['ru'],
    れ:['re'],
    ろ:['ro'],
    わ:['wa'],
    を:['wo'],
    ん:['nn','xn'],
    が:['ga'],
    ぎ:['gi'],
    ぐ:['gu'],
    げ:['ge'],
    ご:['go'],
    ざ:['za'],
    じ:['ji','zi'],
    ず:['zu'],
    ぜ:['ze'],
    ぞ:['zo'],
    だ:['da'],
    ぢ:['di'],
    づ:['du'],
    で:['de'],
    ど:['do'],
    ば:['ba'],
    び:['bi'],
    ぶ:['bu'],
    べ:['be'],
    ぼ:['bo'],
    ぱ:['pa'],
    ぴ:['pi'],
    ぷ:['pu'],
    ぺ:['pe'],
    ぽ:['po'],
    ぁ:['la','xa'],
    ぃ:['li','xi','lyi','xyi'],
    ぅ:['lu','xu'],
    ぇ:['le','xe','lye','xye'],
    ぉ:['lo','xo'],
    ゃ:['lya','xya'],
    ゅ:['lyu','xyu'],
    ょ:['lyo','xyo'],
    っ:['ltu','xtu'],
    ゎ:['lwa','xwa'],
    ゃ:['kya','kilya', 'kixya'],
    きぃ:['kyi','kili', 'kixi', 'kilyi', 'kixyi'],
    きゅ:['kyu','kilyu', 'kixyu'],
    きぇ:['kye','kile', 'kixe', 'kilye', 'kixye'],
    きょ:['kyo','kilyo', 'kixyo'],
    ぎゃ:['gya','gilya', 'gixya'],
    ぎぃ:['gyi','gili', 'gixi', 'gilyi', 'gixyi'],
    ぎゅ:['gyu','gilyu', 'gixyu'],
    ぎぇ:['gye','gile', 'gixe', 'gilye', 'gixye'],
    ぎょ:['gyo','gilyo', 'gixyo'],
    しゃ:['sya','sha','silya', 'sixya', 'cilya', 'cixya', 'shilya', 'shixya'],
    しぃ:['syi','sili', 'sixi', 'silyi', 'sixyi', 'cili', 'cixi', 'cilyi', 'cixyi', 'shili', 'shixi', 'shilyi', 'shixyi'],
    しゅ:['syu','shu','silyu', 'sixyu', 'cilyu', 'cixyu', 'shilyu', 'shixyu'],
    しぇ:['sye','she','sile', 'sixe', 'silye', 'sixye', 'cile', 'cixe', 'cilye', 'cixye', 'shile', 'shixe', 'shilye', 'shixye'],
    しょ:['syo','sho','silyo', 'sixyo', 'cilyo', 'cixyo', 'shilyo', 'shixyo'],
    じゃ:['ja','zya','jya','zilya', 'zixya', 'jilya', 'jixya'],
    じぃ:['zyi','jyi','zili', 'zixi', 'zilyi', 'zixyi', 'jili', 'jixi', 'jilyi', 'jixyi'],
    じゅ:['ju','zyu','jyu','zilyu', 'zixyu', 'jilyu', 'jixyu'],
    じぇ:['je','zye','jye','zile', 'zixe', 'zilye', 'zixye', 'jile', 'jixe', 'jilye', 'jixye'],
    じょ:['jo','zyo','jyo','zilyo', 'zixyo', 'jilyo', 'jixyo'],
    ちゃ:['tya','cha','cya','tilya', 'tixya', 'chilya', 'chixya'],
    ちぃ:['tyi','cyi','tili', 'tixi', 'tilyi', 'tixyi', 'chili', 'chixi', 'chilyi', 'chixyi'],
    ちゅ:['tyu','chu','cyu','tilyu', 'tixyu', 'chilyu', 'chixyu'],
    ちぇ:['tye','che','cye','tile', 'tixe', 'tilye', 'tixye', 'chile', 'chixe', 'chilye', 'chixye'],
    ちょ:['tyo','cho','cyo','tilyo', 'tixyo', 'chilyo', 'chixyo'],
    ぢゃ:['dya','dilya', 'dixya'],
    ぢぃ:['dyi','dili', 'dixi', 'dilyi', 'dixyi'],
    ぢゅ:['dyu','dilyu', 'dixyu'],
    ぢぇ:['dye','dile', 'dixe', 'dilye', 'dixye'],
    ぢょ:['dyo','dilyo', 'dixyo'],
    てゃ:['tha','telya', 'texya'],
    てぃ:['thi','teli', 'texi', 'telyi', 'texyi'],
    てゅ:['thu','telyu', 'texyu'],
    てぇ:['the','tele', 'texe', 'telye', 'texye'],
    てょ:['tho','telyo', 'texyo'],
    でゃ:['dha','delya', 'dexya'],
    でぃ:['dhi','deli', 'dexi', 'delyi', 'dexyi'],
    でゅ:['dhu','delyu', 'dexyu'],
    でぇ:['dhe','dele', 'dexe', 'delye', 'dexye'],
    でょ:['dho','delyo', 'dexyo'],
    にゃ:['nya','nilya', 'nixya'],
    にぃ:['nyi','nili', 'nixi', 'nilyi', 'nixyi'],
    にゅ:['nyu','nilyu', 'nixyu'],
    にぇ:['nye','nile', 'nixe', 'nilye', 'nixye'],
    にょ:['nyo','nilyo', 'nixyo'],
    ひゃ:['hya','hilya', 'hixya'],
    ひぃ:['hyi','hili', 'hixi', 'hilyi', 'hixyi'],
    ひゅ:['hyu','hilyu', 'hixyu'],
    ひぇ:['hye','hile', 'hixe', 'hilye', 'hixye'],
    ひょ:['hyo','hilyo', 'hixyo'],
    びゃ:['bya','bilya', 'bixya'],
    びぃ:['byi','bili', 'bixi', 'bilyi', 'bixyi'],
    びゅ:['byu','bilyu', 'bixyu'],
    びぇ:['bye','bile', 'bixe', 'bilye', 'bixye'],
    びょ:['byo','bilyo', 'bixyo'],
    ぴゃ:['pya','pilya', 'pixya'],
    ぴぃ:['pyi','pili', 'pixi', 'pilyi', 'pixyi'],
    ぴゅ:['pyu','pilyu', 'pixyu'],
    ぴぇ:['pye','pile', 'pixe', 'pilye', 'pixye'],
    ぴょ:['pyo','pilyo', 'pixyo'],
    ふゃ:['fua','hulya', 'huxya', 'fulya', 'fuxya'],
    ふゅ:['fyu','hulyu', 'huxyu', 'fulyu', 'fuxyu'],
    ふょ:['fyo','hulyo', 'huxyo', 'fulyo', 'fuxyo'],
    みゃ:['mya','milya', 'mixya'],
    みぃ:['myi','mili', 'mixi', 'milyi', 'mixyi'],
    みゅ:['myu','milyu', 'mixyu'],
    みぇ:['mye','mile', 'mixe', 'milye', 'mixye'],
    みょ:['myo','milyo', 'mixyo'],
    りゃ:['rya','rilya', 'rixya'],
    りぃ:['ryi','rili', 'rixi', 'rilyi', 'rixyi'],
    りゅ:['ryu','rilyu', 'rixyu'],
    りぇ:['rye','rile', 'rixe', 'rilye', 'rixye'],
    りょ:['ryo','rilyo', 'rixyo'],
    いぇ:['ye','ile', 'ixe', 'ilye', 'ixye', 'yile', 'yixe', 'yilye', 'yixye'],
    うぁ:['wha','ula', 'uxa', 'wula', 'wuxa', 'whula', 'whuxa'],
    うぃ:['wi','whi','uli', 'uxi', 'ulyi', 'uxyi', 'wuli', 'wuxi', 'wulyi', 'wuxyi', 'whuli', 'whuxi', 'whulyi', 'whuxyi'],
    うぇ:['we','whe','ule', 'uxe', 'ulye', 'uxye', 'wule', 'wuxe', 'wulye', 'wuxye', 'whule', 'whuxe', 'whulye', 'whuxye'],
    うぉ:['who','ulo', 'uxo', 'wulo', 'wuxo', 'whulo', 'whuxo'],
    ヴぁ:['va','vula', 'vuxa'],
    ヴぃ:['vi','vuli', 'vuxi', 'vulyi', 'vuxyi'],
    ヴ:['vu'],
    ヴぇ:['ve','vule', 'vuxe', 'vulye', 'vuxye'],
    ヴぉ:['vo','vulo', 'vuxo'],
    くぁ:['qwa','qa','kula', 'kuxa', 'cula', 'cuxa', 'qula', 'quxa'],
    くぃ:['qwi','qi','qyi','kuli', 'kuxi', 'kulyi', 'kuxyi', 'culi', 'cuxi', 'culyi', 'cuxyi', 'quli', 'quxi', 'qulyi', 'quxyi'],
    くぅ:['qwu','kulu', 'kuxu', 'culu', 'cuxu', 'qulu', 'quxu'],
    くぇ:['qwe','qe','qye','kule', 'kuxe', 'kulye', 'kuxye', 'cule', 'cuxe', 'culye', 'cuxye', 'qule', 'quxe', 'qulye', 'quxye'],
    くぉ:['qwo','qo','kulo', 'kuxo', 'culo', 'cuxo', 'qulo', 'quxo'],
    ぐぁ:['gwa','gula', 'guxa'],
    ぐぃ:['gwi','guli', 'guxi', 'gulyi', 'guxyi'],
    ぐぅ:['gwu','gulu', 'guxu'],
    ぐぇ:['gwe','gule', 'guxe', 'gulye', 'guxye'],
    ぐぉ:['gwo','gulo', 'guxo'],
    すぁ:['swa','sula', 'suxa'],
    すぃ:['swi','suli', 'suxi', 'sulyi', 'suxyi'],
    すぅ:['swu','sulu', 'suxu'],
    すぇ:['swe','sule', 'suxe', 'sulye', 'suxye'],
    すぉ:['swo','sulo', 'suxo'],
    つぁ:['tsa','tula', 'tuxa', 'tsula', 'tsuxa'],
    つぃ:['tsi','tuli', 'tuxi', 'tulyi', 'tuxyi', 'tsuli', 'tsuxi', 'tsulyi', 'tsuxyi'],
    つぇ:['tse','tule', 'tuxe', 'tulye', 'tuxye', 'tsule', 'tsuxe', 'tsulye', 'tsuxye'],
    つぉ:['tso','tulo', 'tuxo', 'tsulo', 'tsuxo'],
    とぁ:['twa','tola', 'toxa'],
    とぃ:['twi','toli', 'toxi', 'tolyi', 'toxyi'],
    とぅ:['twu','tolu', 'toxu'],
    とぇ:['twe','tole', 'toxe', 'tolye', 'toxye'],
    とぉ:['two','tolo', 'toxo'],
    どぁ:['dwa','dola', 'doxa'],
    どぃ:['dwi','doli', 'doxi', 'dolyi', 'doxyi'],
    どぅ:['dwu','dolu', 'doxu'],
    どぇ:['dwe','dole', 'doxe', 'dolye', 'doxye'],
    どぉ:['dwo','dolo', 'doxo'],
    ふぁ:['fa','fwa','hula', 'huxa', 'fula', 'fuxa'],
    ふぃ:['fi','fwi','fyi','huli', 'huxi', 'hulyi', 'huxyi', 'fuli', 'fuxi', 'fulyi', 'fuxyi'],
    ふぅ:['fwu','hulu', 'huxu', 'fulu', 'fuxu'],
    ふぇ:['fe','fwe','fye','hule', 'huxe', 'hulye', 'huxye', 'fule', 'fuxe', 'fulye', 'fuxye'],
    ふぉ:['fo','fwo','hulo', 'huxo', 'fulo', 'fuxo'],
    ー:['-']
};

const SYMBOL = {
    '1': ['1'], '2': ['2'], '3': ['3'], '4': ['4'], '5': ['5'], '6': ['6'], '7': ['7'], '8': ['8'], '9': ['9'], '0': ['0'],
    'a': ['a'], 'b': ['b'], 'c': ['c'], 'd': ['d'], 'e': ['e'], 'f': ['f'], 'g': ['g'], 'h': ['h'], 'i': ['i'], 'j': ['j'], 
    'k': ['k'], 'l': ['l'], 'm': ['m'], 'n': ['n'], 'o': ['o'], 'p': ['p'], 'q': ['q'], 'r': ['r'], 's': ['s'], 't': ['t'], 
    'u': ['u'], 'v': ['v'], 'w': ['w'], 'x': ['x'], 'y': ['y'], 'z': ['z'],
    'A': ['A'], 'B': ['B'], 'C': ['C'], 'D': ['D'], 'E': ['E'], 'F': ['F'], 'G': ['G'], 'H': ['H'], 'I': ['I'], 'J': ['J'], 
    'K': ['K'], 'L': ['L'], 'M': ['M'], 'N': ['N'], 'O': ['O'], 'P': ['P'], 'Q': ['Q'], 'R': ['R'], 'S': ['S'], 'T': ['T'], 
    'U': ['U'], 'V': ['V'], 'W': ['W'], 'X': ['X'], 'Y': ['Y'], 'Z': ['Z'],
    '!': ['!'], '"': ['"'], '#': ['#'], '$': ['$'], '%': ['%'], '&': ['&'], "'": ["'"], '(': ['('], ')': [')'], '*': ['*'], 
    '+': ['+'], ',': [','], '-': ['-'], '.': ['.'], '/': ['/'], ':': [':'], ';': [';'], '<': ['<'], '=': ['='], '>': ['>'], 
    '?': ['?'], '@': ['@'], '[': ['['], '\\': ['\\'], ']': [']'], '^': ['^'], '_': ['_'], '`': ['`'], '{': ['{'], '|': ['|'], 
    '}': ['}'], '~': ['~'], ' ': [' ']
};

const LETTER = Object.assign({}, HIRAGANA, SYMBOL);

const EXCEPTION_NN = ['n', 'y', 'a', 'i', 'u', 'e', 'o'];
const EXCEPTION_SYMBOLS = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', 
    '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ' '
];

const EXCEPTION_LTU = ['n', 'a', 'i', 'u', 'e', 'o', ...EXCEPTION_SYMBOLS];
const KEY_NAMES = Object.keys(SYMBOL);

//定数
const MISS = 0;
const CORRECT = 1;
const CHUNK_COMPLETE = 2;
const SENTENCE_COMPLETE = 3;

//シフト変換用の辞書
const SHIFT = {
    '1': '!', '2': '"', '3': '#', '4': '$', '5': '%', '6': '&', '7': "'", '8': '(', '9': ')',
    'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z',
    '-': '=', '^': '~', '\\': '_', '@': '`', '[': '{', ']': '}', ';': '+', ':': '*', ',': '<', '.': '>', '/': '?'
};

class Process {
    //有効なキーの名前をリストで返す
    static showKeyNames() {
        console.log(KEY_NAMES);
    };

    //有効なキーの名前に含まれているか判定
    static checkIgnore(){
        return !KEY_NAMES.includes(key);
    };

    // シフトが押されているときの文字に変える静的メソッド
    static shiftFilter(name) {
        return SHIFT[name] || name;
    };

    // ふりがなの文字に無効なものが含まれているか判定するメソッド
    static validateInput(hurigana) {
        const validChars = new Set([...Object.keys(LETTER), ...Object.keys(SYMBOL)]);
        for (const char of hurigana) {
            if (!validChars.has(char)) {
                throw new Error(`Invalid character found: ${char} in input: ${hurigana}\nYou can use only the following characters: ${[...validChars].join(', ')}`);
            };
        };
    };

    // ユーザーが呼び出すためのメソッド（エラーハンドリング付き）
    static divide(hurigana) {
        Process.validateInput(hurigana);
        return Process.#divide(hurigana);
    };

    // ふりがなを受け取って、取りうるローマ字のパターンを生成するメソッド
    static #divide(hurigana) {
        Process.validateInput(hurigana);
        const letterDict = LETTER;
        const dividedRoman = [];
        let chunk = null;        //特定のひらがなをいくつかの文字で一つの塊とする

        //文章を先頭からチャンクごとに区切って入力パターンを作る（「ん」と「っ」に関しては処理が違うので個別に扱う）
        while (hurigana.length > 0) {
            let pattern = null;
            if (hurigana[0] === 'ん' && hurigana.length !== 1) {           //文字が「ん」かつ最後の文字でない時
                [pattern, hurigana] = Process.handleNN(hurigana, letterDict);
            } else if (hurigana[0] === 'っ' && hurigana.length !== 1) {    //文字が「っ」かつ最後の文字でない時
                [pattern, hurigana] = Process.handleLTU(hurigana, letterDict);
            } else if (hurigana.slice(0, 2) in letterDict) {               //先頭から2文字が辞書に含まれる時
                [pattern, hurigana] = Process.handlePair(hurigana, letterDict);
            } else {                                                       // 特殊なパターンでない時
                chunk = hurigana[0];
                pattern = letterDict[chunk];
                hurigana = hurigana.slice(1);
            };
            dividedRoman.push(pattern);
        };
        return dividedRoman;
    };

    //文字が「ん」のときはnを二回入力しなければならないのか、１回でいいのかを調べ、「ん」を含む数文字を１チャンクとして入力パターンを作成
    static handleNN(hurigana, letterDict) {
        return Process.handleSpecialLetter(hurigana, letterDict, EXCEPTION_NN, 'n');
    };
    
    //文字が「っ」のときは、後ろの文字の最初のローマ字を打つだけでいいのか調べ、「っ」を含む数文字を１チャンクとして入力パターンを作成
    static handleLTU(hurigana, letterDict) {
        return Process.handleSpecialLetter(hurigana, letterDict, EXCEPTION_LTU);
    };
    
    //「ん」または「っ」に関しては、それらを含む数文字を１チャンクとして入力パターンを作成
    static handleSpecialLetter(hurigana, letterDict, exception, specialChar = null) {
        const chunkLength = hurigana.slice(1, 3) in letterDict ? 3 : 2;
        let chunk = hurigana.slice(0, chunkLength);
        hurigana = hurigana.slice(chunkLength);
        let pattern;
        
        if (specialChar) {
            pattern = letterDict[chunk.slice(1)].filter(i => !exception.includes(i[0])).map(i => specialChar + i);
        } else {
            pattern = letterDict[chunk.slice(1)].filter(i => !exception.includes(i[0])).map(i => i[0] + i);
        }
        
        pattern = pattern.concat(letterDict[chunk[0]].flatMap(i => letterDict[chunk[1]].map(j => i + j)));
        return [pattern, hurigana];
    };

    static handlePair(hurigana, letterDict) {
        const chunk = hurigana.slice(0, 2);
        const pattern = letterDict[chunk];
        if (pattern) {
            hurigana = hurigana.slice(2);
        };
        return [pattern, hurigana];
    };

    constructor(words) {
        this.inputCount = 0;           // 入力回数
        this.currentChunkNum = 0;      // 現在入力しているひらがなが何番目か
        this.input = '';               // 入力済みのローマ字の文字列
        this.showRoman = '';           // 画面に出力するローマ字
        this.words = words;            // 文章の一覧
        this.next = null;              // 次の文章
        // words内の値を検証
        Object.values(this.words).forEach(value => {
            Process.validateInput(value);
        });
        this.count = 0;
        // 文章、ふりがな、入力パターンを生成
        const { sentence, hurigana, dividedRoman, next } = this.#createSentence();
        this.sentence = sentence;
        this.hurigana = hurigana;
        this.dividedRoman = dividedRoman;
        this.next = next;
    };

    #createSentence(words = null) {
        //引数で文章の辞書が渡されなかったら自分の辞書から
        if (words === null) {
            words = this.words;
        };
        if (this.next === null) {
            const keys = Object.keys(words);
            this.next = keys[this.count];
            this.count++;
        };
        const sentence = this.next;
        const hurigana = words[sentence];
        const dividedRoman = Process.#divide(hurigana);
        const keys = Object.keys(words);
        this.next = keys[this.count];
        this.count++;

        if (this.count > Object.keys(words).length - 1) {
            this.count = 0;
        }
        return { sentence, hurigana, dividedRoman, next: this.next };
    };

    // 新しい文章、ひらがな、ローマ字を設定するメソッド
    setNewSentence(words = null) {
        this.inputCount = 0;
        this.currentChunkNum = 0;
        this.input = '';
        const { sentence, hurigana, dividedRoman, next } = this.#createSentence(words);
        this.sentence = sentence;
        this.hurigana = hurigana;
        this.dividedRoman = dividedRoman;
        this.next = next;
    };

    // 別の辞書を設定するメソッド
    setNewWords(words) {
        Object.values(words).forEach(value => {
            this.validateInput(value);
        });
        this.words = words;
        this.setNewSentence(words);
    };

    // 正しい文字が入力されたか判定する
    checkCorrectInput(key, shift = false) {
        if (shift) {
            key = Process.shiftFilter(key);
        };
        const saved = this.dividedRoman[this.currentChunkNum].filter(x => x[this.inputCount] === key);

        if (saved.length !== 0) {
            this.dividedRoman[this.currentChunkNum] = saved;
            this.input += key;
            this.inputCount += 1;
            return true;
        };
        return false;
    };

    // 正しい文字が入力された結果、ひらがなが打ち終わったか判定する
    checkChunkCompletion() {
        if (this.dividedRoman[this.currentChunkNum].length === 1 && this.dividedRoman[this.currentChunkNum][0].length === this.inputCount) {
            this.currentChunkNum += 1;
            this.inputCount = 0;
            return true;
        };
        return false;
    };

    // ひらがなが打ち終わった結果、文章が打ち終わったか判定する
    checkSentenceCompletion() {
        if (this.currentChunkNum === this.dividedRoman.length) {
            this.inputCount = 0;
            this.currentChunkNum = 0;
            this.input = '';
            return true
        };
    };

    // ローマ字を画面に表示するための文字列を更新する
    updateShowRoman() {
        this.showRoman = '';
        for (const chunk of this.dividedRoman) {
            this.showRoman += chunk[0];
        }
        return this.showRoman;
    };

    // 音声とか付けないなら、これだけ呼び出せば使える
    main(key, shift = false) {
        const correctInput = this.checkCorrectInput(key, shift);
        if (correctInput) {
            const chunkCompleted = this.checkChunkCompletion();
            if (chunkCompleted) {
                const sentenceCompleted = this.checkSentenceCompletion();
                if (sentenceCompleted) {
                    const result = this.#createSentence();
                    this.sentence = result.sentence;
                    this.hurigana = result.hurigana;
                    this.dividedRoman = result.dividedRoman;
                    this.next = result.next;
                    return SENTENCE_COMPLETE;
                } else {
                    return CHUNK_COMPLETE;
                }
            } else {
                return CORRECT;
            }
        } else {
            return MISS;
        }
    }
};