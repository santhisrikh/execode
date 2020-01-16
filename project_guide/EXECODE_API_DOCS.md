## Sign Up

POST `/signup`

#### REQUEST

```json
{
     
	"email": "STRING",
	"name":"STRING",
	"password": "STRING",
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Successfully registered."
}
```

## Login

POST `/login`

#### REQUEST

```json
{
     
	"email": "STRING",
	"password": "STRING"
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Successfully logged in.",
    "Authorization": "<auth_token>"
```

## Logout

POST `/logout`

#### REQUEST

##### Header
```json
{
    "Authorization": "Bearer <auth_token>"
}
```
##### Body
```json
{
     
	"email": "STRING",
	"password": "STRING"
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Token Deactivated",
```

## Challenge
​
GET `/challenge/<challenge_name>`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE 
​
Success (Status Code - 200)
```json
{
     "challenge_details":{
                        "description":"STRING",
                        "problem_statement":"STRING",
                        "input_format":"STRING",
                        "output_format":"STRING",
                        "constraints":"STRING",
                        "difficulty":"STRING",
                        "sample_input":"STRING",
                        "sample_output":"STRING",
                        "marks":"INTEGER",
    },
    "comment": "List of Challenges",
}
```
​
POST `/challenge/<challenge_name>`
​
Required Headers - `Authorization: Bearer <user_token>`
​
#### REQUEST 
​
Body 
```json
{
        "challenge_details": {
                            "description":"STRING",
                            "problem_statement":"STRING",
                            "input_format":"STRING",
                            "output_format":"STRING",
                            "constraints":"STRING",
                            "difficulty":"STRING",
                            "sample_input":"STRING",
                            "sample_output":"STRING",
                            "marks":"INTEGER"
        },
        "test_cases":[
                        {
                            "test_case_name":"STRING",
                            "test_case_strength":"STRING",
                            "visibility":"Boolean",
                            "input":"INTEGER",
                            "output":"INTEGER",
                        }   
        ],
        "settings":[
                    {
                        "language":"STRING",
                        "time_limit":"INTEGER",
                        "memory_limit":"INTEGER",
                    },
        ],
        "action":"creating the challenge"
​
}
```
​
#### RESPONSE
​
Success (Status Code - 201)
```json
{
       "comment":"successfully stored the data"
}
```
​
## Challenges
​
GET `/challenges`
​
Required Headers - `Authorization: JWT <access_token>`
​
Query Params
​
```
{
    "contest_id": "INTEGER"
}
```
#### RESPONSE
​
SUCCESS (Status Code - 200)
```json
{
        "contest_id":"INTEGER", 
            "challenges":[{   
                            "challenge_id":"STRING",
                            "description":"STRING",
                            "problem_statement":"STRING",
                            "input_format":"STRING",
                            "output_format":"STRING",
                            "constraints":"STRING",
                            "difficulty":"INTEGER",
                            "sample_input":"STRING",
                            "sample_output":"STRING",
                            "marks":"INTEGER",
            }
        ],
​
        "comment":"getting all the challenges for a particular contest id if id is present",
​
}
```
GET `/challenges`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
SUCCESS (Status Code - 200)
```json
{
     "challenges":[
                {
                "challenge_name":"STRING",
                "challenge_id":"INTEGER",
                "max_Score":"INTEGER",
                "test_case_count":"INTEGER",
            }
            ],
    "comment":"data of a challenge"
​
}
```
## Contest
​
POST `/contest/<contest_name>`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### REQUEST
​
BODY
```json
{
            "contest_id":"INTEGER",
            "contest_name":"STRING",
            "start_date":"DATETIME",
            "end_date":"DATETIME",
            "end_time":"INTEGER",
            "details":"STRING",
            "show_leader_board":"BOOLEAN",
            "challenges_ids":["INTEGER","INTEGER","INTEGER"],
            "action":" "
}
```
​
#### RESPONSE
​
Success (Status Code - 201)
```json
{
           "comment":"Successfully created Contest"
 
​
}
```
​
GET `/contest/<contest_name>`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
Success (Status Code - 200)
```json
{
            "contest_name":"STRING",
            "start_date":"DATETIME",
            "end_date":"DATETIME",
            "end_time":"DATETIME",
            "details":"STRING",
            "show_leader_board":"BOOLEAN",
            "challenges":[{
                            "challenge_id":"INTEGER",
                            "description":"STRING",
                            "problem_statement":"STRING",
                            "input_format":"STRING",
                            "output_format":"STRING",
                            "constraints":"STRING",
                            "difficulty":"INTEGER",
                            "sample_input":"STRING",
                            "sample_output":"STRING",
                            "marks":’’
                            },{},{}],
    "comments":’’,
​
}
```
​
## Contests
​
GET `/contests`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
Success (Status Code - 200)
```json
{
            "contests":[{
                        "contest_id":"INTEGER",
                        "contest_name":"STRING",
                        "start_date":"DATETIME",
                        "end_date":"DATETIME",
                        "end_time":"DATETIME",
                        "details":"STRING",
                        "show_leader_board":"BOOLEAN",
                    }],
            "comments":’’,        
​
}
```
​
## Signup Contest
​
GET `/signup/contest/<contest_id>`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
Success (Status Code - 202)
```json
{
            "comments":"successfully signed up",
            "error":""
​
}
```
​
Failure (Status Code - 403)
```json
{
            "comments":"contest has not started",
            "error":true;
​
}
```
​
## Run Code
​
POST `/runcode`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### REQUEST
​
Body
```json
{
            "contest_id":"INTEGER",
            "challenge_id":"INTEGER",
            "language":"STRING",
            "code":"STRING",
            "action":"submitting the code"
​
}
```
#### RESPONSE
​
Success (Status Code - 200)
```json
{           
        "comment":"",
        "user_output":"STRING",
        "user_Error":"STRING",
        "sample_result": "BOOLEAN"
​
}
```
​
## Submit Code
​
POST `/submit`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### REQUEST
​
Body
```json
{
        "challenge_id":"INTEGER",
        "contest_id":"INTEGER",
        "code":"STRING",
        "language":"STRING",
        "action":"submit the code",
    
}
```
​
#### RESPONSE
​
Success (Status Code - 200)
```json
{
        "total_marks":"INTEGER",
        "test_case_result":[
                            { 
                                "test_case_id":"INTEGER",
                                "passed":"BOOLEAN",
                            },{},{}],
        "time_taken":"DATETIME",
        "memory_taken":"INTEGER",
        "comment": ""
​
}
​
```
​
## Leaderboard
​
GET `contest/<contest_id>/leaderboard`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
Success (Status Code - 202)
```json
{
            "leaderboard":[
                {
                    "user_id":"INTEGER",
                    "user_name":"STRING",
                    "total_marks":"STRING",
                    
                }],
            "comment":""
​
}
```
GET `contest/<contest_id>/leaderboard/<user_id>`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
Success (Status Code - 202)
```json
{
            "challenges":[
                {
                    "attempt_id":"INTEGER",
                    "challenge_id":"INTEGER",
                    "challenge_name":"STRING",
                    "max_score":"INTEGER",
                    "submission_id":"INTEGER"
                    
                }],
            "comment":""
​
}
​
​
​
```
​
GET `/code/<submission_id>`
​
Required Headers - `Authorization: JWT <access_token>`
​
#### RESPONSE
​
Success (Status Code - 202)
```json
{
           "code":{},
          "comment":""
​
}
```