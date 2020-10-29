import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import * as _ from 'lodash';
import { PostService } from "../../services/post.service"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;

  user: any;

  description: any;
  tags: any = [];
  fileToUpload: File = null;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(
    private titleService: Title,
    private _PostService: PostService,
    private http: HttpClient,
    private _AuthService: AuthService,
    private _flashMessagesService: FlashMessagesService,
  ) {
    this.titleService.setTitle("DEVFORDEVS");
    this.user = this._AuthService.getUserData();
    this.user = JSON.parse(this.user);

    //get all posts
    this._PostService.getPosts().subscribe(res => {
      console.log(res)
      this.posts = res.response;
    }, err => {
      console.log(err);
      return false;
    })



  }

  ngOnInit(): void {
  }

  // claculate date diffrence
  calculateDiff(data) {

    let date = new Date(data);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }

  // Like a post
  

  // write a comment
  writeComment(postId,comment){
    const userComment = {
      postId: postId,
      commentator_id: this.user.id,
      commentator_name: this.user.name,
      commentator_dp: this.user.dp,
      commentator_designation: this.user.designation,
      comment: comment
    }

    this._PostService.addComment(userComment).subscribe(res=>{

      if (res.success) {
        //get all posts
        this._PostService.getPosts().subscribe(res => {
          console.log(res)
          this.posts = res.response;
        }, err => {
          console.log(err);
          return false;
        })
        this._flashMessagesService.show(res.msg, { cssClass: 'alert-success' });
      } else {
        this._flashMessagesService.show(res.msg, { cssClass: 'alert-danger' });
      }


    })
  }

// Start a post
  startAPost() {
    const formData = new FormData();
    formData.append("authorId", this.user.id);
    formData.append("authorDP", this.user.dp);
    formData.append("authorName", this.user.name);
    formData.append("authorDesignation", this.user.designation);
    formData.append("content", this.description);
    formData.append("tags", this.tags);
    formData.append("file", this.fileToUpload, this.fileToUpload.name);
    console.log(this.fileToUpload);
    this._PostService.addPost(formData).subscribe(res => {
      if (res.success) {
        //get all posts
        this._PostService.getPosts().subscribe(res => {
          console.log(res)
          this.posts = res.response;
        }, err => {
          console.log(err);
          return false;
        })
        this._flashMessagesService.show(res.msg, { cssClass: 'alert-success' });
      } else {
        this._flashMessagesService.show(res.msg, { cssClass: 'alert-danger' });
      }
    })
    // this.http.post("http://localhost:3000/post/addPost",formData).subscribe((res) => {
    //     console.log(res)

    //   }, (err) =>{
    //     console.log(err)
    //   } 
    // )

  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      this.fileToUpload = fileInput.target.files[0];

      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg', 'image/gif', 'image/svg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);


          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }

}
