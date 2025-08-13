/*Create a class BankAccount with data members: account number, account holder name, and
balance. Add methods to deposit and withdraw money.*/
#include<iostream>
#include<string.h>
#include<vector>
using namespace std;
bool continue_calc();
class BankAccount {
    private:
    static int next_acc_no;
    string user_name;
    int account_number;
    int balance=200;
    int mob_no;
    int aadhar_no;
    public:
    BankAccount():balance(200){};
    void create_acc(){
        cout<<"Enter the following details:"<<endl;
        cout<<"Accoutnt holder name: ";
        cin.ignore();
        getline(cin,user_name);
        account_number=next_acc_no++;
        cout<<" Mob number: ";
        cin>>mob_no;
        cout<<"Aadhar no: ";
        cin>>aadhar_no;
        cout<<"Account created! Account number: "<<account_number;
    }

    void add_balance(){
        cout<<"Enter the money you want to deposit: ";
        int bal;
        cin>>bal;
        balance+=bal;
        cout<<"Ammount deposited ! current balance: "<<balance;
    }

    void withdraw_money(){
        cout<<"Enter the amt you want to withdraw: ";
        int dep;
        cin>>dep;
        cout<<endl;
        if(dep<=balance-200){
            balance-=dep;
            cout << "Amount withdrawn. Remaining Balance: " << balance << "\n";
        }
        else
        {
            cout<<"Invalid transaction as min bal of 200 is necessary "<<endl;
        }
    }
    void show_details() const {
        cout << "Account Number: " << account_number << "\n";
        cout << "Name: " << user_name << "\n";
        cout << "Balance: " << balance << "\n";
        cout << "Mobile: " << mob_no << "\n";
        cout << "Aadhar: " << aadhar_no << "\n";
    }
    int getAccountNumber(){
        return account_number;
    }
};
int BankAccount::next_acc_no=1001;
bool continue_calc(){
    char c;
    cout<<"Do u want to continue ?(y/n)"<<endl;
    cin>>c;
    if (c=='y'||c=='Y')
    {
        return true;
    }
    else
    {
        return false;
    }
}
int main(){
    bool cont=true;
    while (cont)
    {
        vector<BankAccount> accounts;
        cout << "\n===== BANK MENU =====\n";
        cout << "1. Create Account\n";
        cout << "2. Deposit Money\n";
        cout << "3. Withdraw Money\n";
        cout << "4. Show Account Details\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        int choice;
        cin >> choice;
        int acc_no;
        bool found=false;
        switch (choice)
        {
        case 1:{
            BankAccount acc;
            acc.create_acc();
            accounts.push_back(acc);
            cont=continue_calc();
            break;}
        case 2:
        case 3:
        case 4:
            cout<<"Enter Account Number: ";
            cin>>acc_no;
            for(auto acc:accounts){
                if (acc.getAccountNumber()==acc_no)
                {
                    if (choice==2)
                    {
                        acc.add_balance();
                    }
                    else if (choice==3)
                    {
                        acc.withdraw_money();
                    }
                    else if (choice==4)
                    {
                        acc.show_details();
                    }
                    found=true;
                }
            }
            if (!found)
            {
                cout<<"Account not found! \n";
                break;
            }
        case 5:
            cont=false;
            break;
        default:
            cout<<"Invalid Choice ]\n";
                    if (choice!=5)
        {
            cont=continue_calc();
        }
        return 0;
    }
    
} 
}

