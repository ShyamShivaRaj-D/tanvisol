<%@page import ="java.sql.*" %>

<%@page import="Call.ScheduleACall" %>

<jsp:useBean id="call" class="Call.ScheduleACall" >
<jsp:setProperty name="call" property="*" />
<%
  Connection con=null;
  try
  {
   Class.forName("com.mysql.jdbc.Driver");
   con =DriverManager.getConnection ("jdbc:mysql://localhost/tanvisol?"+"user=root&password=root");;
   PreparedStatement ps =con.prepareStatement("insert into ScheduleCall(firstname,lastname,email,mnumber,address) values (?,?,?,?,?)");
   ps.setString(1,call.getFirstname());
   ps.setString(2,call.getLastname());
   ps.setString(3,call.getEmail());
   ps.setString(4,call.getNumber());
   ps.setString(5,call.getAddress());
   int status=ps.executeUpdate();
   con.close();
    if (status > 0) {
    %>
      <script>
         alert("Thank you! we will call you later");
         window.location.href = "index.html";
      </script>
    <%
    }
  }
  catch(Exception ex){
   ex.printStackTrace();
  }
%>
</jsp:useBean>