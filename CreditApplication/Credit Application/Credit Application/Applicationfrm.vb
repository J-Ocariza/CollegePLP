Module application

    Public Sub InsertData()
        Dim bankruptcy, defaulted, acctype As String
        If FRMGenInfo.cbyesbank.Checked = True Then
            bankruptcy = "Yes"
        ElseIf FRMGenInfo.cbnobank.Checked = True Then
            bankruptcy = "No"
        End If
        If FRMGenInfo.cbyesdef.Checked = True Then
            defaulted = "Yes"
        ElseIf FRMGenInfo.cbnodef.Checked = True Then
            defaulted = "No"
        End If
        If FRMbankinfo.cbchecking.Checked = True Then
            acctype = "checking"
        ElseIf FRMbankinfo.cbsaving.Checked = True Then
            acctype = "Savings"
        End If
        sql = "INSERT INTO applicant (first_name, last_name, Address, Phone_NO, Email_ADD, DOB, SSN, HasFiledBankruptcy, HasDefaultedOnCredit, Date) VALUES ('" & FRMGenInfo.txtFirstname.Text & "', '" & FRMGenInfo.txtlastname.Text & "', '" & FRMGenInfo.txtaddress.Text & "', '" & FRMGenInfo.txtphone.Text & "', '" & FRMGenInfo.txtemail.Text & "', '" & FRMGenInfo.dob.Value.ToString("yyyy-MM-dd") & "', '" & FRMGenInfo.txtssn.Text & "', '" & bankruptcy & "', '" & defaulted & "', '" & FRMGenInfo.curdate.Value.ToString("yyyy-MM-dd") & "');"
        openCon()
        cmd.Connection = con
        cmd.CommandText = sql
        x = cmd.ExecuteNonQuery()
        con.Close()

        Dim lastrec As Integer
        openCon()
        With cmd
            .Connection = con
            .CommandText = "Select max(App_id) as maxno from Applicant"
            lastrec = CInt(.ExecuteScalar())
        End With
        con.Close()
        Dim prevCompSal As Double
        Dim curCompSal As Double

        If Double.TryParse(FRMEmployment.prevcompsal.Text, prevCompSal) AndAlso Double.TryParse(FRMEmployment.curcompsal.Text, curCompSal) Then
            sql = "INSERT INTO employment_info VALUES ('" & lastrec & "', '" & FRMEmployment.prevcompname.Text & "', '" & FRMEmployment.prevcomppos.Text & "', '" & prevCompSal & "', '" & FRMEmployment.prevcompadd.Text & "', '" & FRMEmployment.curcompname.Text & "', '" & FRMEmployment.curcomppos.Text & "', '" & curCompSal & "', '" & FRMEmployment.curcompadd.Text & "');"
        Else
            sql = "INSERT INTO employment_info VALUES ('" & lastrec & "', '" & FRMEmployment.prevcompname.Text & "', '" & FRMEmployment.prevcomppos.Text & "', '" & FRMEmployment.prevcompsal.Text & "', '" & FRMEmployment.prevcompadd.Text & "', '" & FRMEmployment.curcompname.Text & "', '" & FRMEmployment.curcomppos.Text & "', '" & FRMEmployment.curcompsal.Text & "', '" & FRMEmployment.curcompadd.Text & "');"
        End If
        openCon()
            cmd.Connection = con
        cmd.CommandText = sql
        x = cmd.ExecuteNonQuery()
        con.Close()
        Dim creditAmount As Double

        If Double.TryParse(FRMbankinfo.txtcreditam.Text, creditAmount) Then
            sql = "INSERT INTO bank_info VALUES ('" & lastrec & "', '" & FRMbankinfo.txtbankname.Text & "', '" & FRMbankinfo.txtconperson.Text & "', '" & FRMbankinfo.txttellno.Text & "', '" & creditAmount & "', '" & acctype & "');"
        Else
            sql = "INSERT INTO bank_info VALUES ('" & lastrec & "', '" & FRMbankinfo.txtbankname.Text & "', '" & FRMbankinfo.txtconperson.Text & "', '" & FRMbankinfo.txttellno.Text & "', '" & FRMbankinfo.txtcreditam.Text & "', '" & acctype & "');"
        End If
        openCon()
            cmd.Connection = con
        cmd.CommandText = sql
        x = cmd.ExecuteNonQuery()
        con.Close()

        sql = "INSERT INTO reference_info (app_id, ref_name, ref_pos, ref_com, ref_phone, ref_email) VALUES ('" & lastrec & "', '" & FRMreferences.txtrefname1.Text & "', '" & FRMreferences.txtrefpos1.Text & "', '" & FRMreferences.txtrefcom1.Text & "', '" & FRMreferences.txtrefphone1.Text & "', '" & FRMreferences.txtrefemail1.Text & "');"
        openCon()
        cmd.Connection = con
        cmd.CommandText = sql
        x = cmd.ExecuteNonQuery()
        con.Close()

        If FRMreferences.plusref = True Then
            sql = "INSERT INTO reference_info (app_id, ref_name, ref_pos, ref_com, ref_phone, ref_email) VALUES ('" & lastrec & "', '" & FRMreferences.txtrefname2.Text & "', '" & FRMreferences.txtrefpos2.Text & "', '" & FRMreferences.txtrefcom2.Text & "', '" & FRMreferences.txtrefphone2.Text & "', '" & FRMreferences.txtrefemail2.Text & "');"
            openCon()
            cmd.Connection = con
            cmd.CommandText = sql
            x = cmd.ExecuteNonQuery()
            con.Close()
        End If
    End Sub

End Module
