"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const courses = [
    {
        id: '1',
        title: 'NestJS from Novice to Guru',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '4 Hour 45 Minutes',
        category: 'business'
    },
    {
        id: '2',
        title: 'Angular Material Design Essentials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '3 Hour 33 Minutes',
        category: 'people'
    },
    {
        id: '3',
        title: 'Mongodb Secrets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet neque nec nunc mollis sagittis. Pellentesque vulputate facilisis justo, quis facilisis purus imperdiet pulvinar. Sed elementum dictum dictum. In sem mauris, vestibulum quis ligula quis, eleifend pharetra lectus. Vivamus pulvinar leo in ante hendrerit, at varius risus placerat. Fusce molestie quam id lorem facilisis, vitae tempus leo consectetur.',
        author: 'John Smith',
        length: '4 Hour 12 Minutes',
        category: 'nightlife'
    }
];
let CoursesService = class CoursesService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    create(createCourseDto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('create', createCourseDto);
            try {
                const createdCourse = new this.courseModel(createCourseDto);
                console.log('New Course', createdCourse);
                return yield createdCourse.save();
            }
            catch (err) {
                return { msg: err };
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.courseModel.find().exec();
            }
            catch (err) {
                return { msg: err };
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`findById ${id}`);
            try {
                let query = yield this.courseModel.findById(id).exec();
                return query;
            }
            catch (err) {
                return { msg: err };
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let results = yield this.courseModel.deleteMany({}).exec();
                console.log('deleteAll:', results);
                return { msg: 'Success' };
            }
            catch (err) {
                return { msg: err };
            }
        });
    }
    findByIdAndDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let results = yield this.courseModel.findByIdAndDelete(id).exec();
                console.log('findByIdAndDelete:', results);
                return { msg: 'Success' };
            }
            catch (err) {
                return { msg: err };
            }
        });
    }
    findByIdAndUpdate(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.courseModel.findByIdAndUpdate(id, data).exec();
            }
            catch (err) {
                return { msg: err };
            }
        });
    }
    getCourses() {
        return courses;
    }
};
CoursesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Course')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map